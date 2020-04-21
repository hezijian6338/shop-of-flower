const { mysql } = require('../../database/mysql')
const User = require('../../model/user')
const Uuid = require('../../utils/uuid')
const Crypto = require('../../utils/ctypto')

/**
 * TODO: 检查密码是否正确
 */
async function login({ phone, password }) {
  const originPassword = await mysql('user')
    .where({
      phone,
    })
    .select('password')

  // console.log(Reflect.has(originPassword[0], 'password'))
  if (!Reflect.has(originPassword[0], 'password')) {
    return false
  }

  return new Crypto(password).hash === originPassword[0].password
}

/**
 * TODO: 以用户电话检索用户信息
 */
async function getUserByPhone({ phone }) {
  let userInfo = {}

  await mysql('user')
    .where({
      phone,
    })
    .select()
    .then((raw) => {
      [userInfo] = raw
    })

  const user = new User(userInfo)

  return user.getData()
}

async function newUser({ ctx }) {
  let newUserInfo = {}
  newUserInfo = ctx.request.body

  const user = new User(newUserInfo)
  user.id = new Uuid().uuid
  user.password = new Crypto(user.password).hash
  user.createdDate = new Date()
  // user.updated_date = new Date().getTime()

  // console.log(user.getData().user_with_no_null);

  const result = await mysql('user').insert(user.getData().user)

  return result[0] === 0 ? { result: true, id: user.id } : { result: false }
}

async function getUser({ id }) {
  const userInfo = await mysql('user')
    .where({ id })
    .select()

  const user = new User(userInfo[0])

  return user.getData()
}

async function setUser({ ctx, id }) {
  let updateUserInfo = {}
  updateUserInfo = ctx.request.body

  const user = new User(updateUserInfo)
  user.updated_date = new Date().getTime()

  const result = await mysql('user')
    .where({
      id,
    })
    .update(user.getData().user_with_no_null)

  return result === 1
}

async function delUser({ id }) {
  const result = await mysql('user')
    .where({ id })
    .del()

  return result === 1
}

module.exports = {
  newUser, getUser, setUser, delUser, login, getUserByPhone,
}
