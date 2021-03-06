const jwt = require('jsonwebtoken')
const service = require('../../service/user')
const Response = require('../../utils/response')

async function login(ctx) {
  const { phone, password } = ctx.request.body

  const result = await service.login({ phone, password })

  const jwtSecret = 'jwtSecret'
  // const tokenExpiresTime = '24h'

  const token = `Bearer ${jwt.sign(phone, jwtSecret)}` // token签名 有效期为1小时

  const { user } = await service.getUserByPhone({ phone })

  const response = new Response()

  if (result) {
    response.SUCCESS = 200
    response.DATA = { token, user }
  } else {
    response.FAIL = 500
    response.DATA = '密码错误'
  }

  ctx.body = response.getData()
}

async function getUserByPhone(ctx) {
  const { phone } = ctx.params

  const { user } = await service.getUserByPhone({ phone })

  const response = new Response()
  response.SUCCESS = 200
  response.DATA = user

  ctx.body = response.getData()
}

async function newUser(ctx) {
  // FIXME: 新增信息需要添加一个判断, 当前没正式数据, 先 hold住
  const result = await service.newUser({ ctx })

  // console.log(result);

  const response = new Response()
  if (result.result) {
    response.SUCCESS = 200
    response.DATA = result
  }

  ctx.body = response.getData()
}

async function getUser(ctx) {
  const { id } = ctx.params

  const { user } = service.getUser({ ctx, id })

  const response = new Response()
  response.SUCCESS = 200
  response.DATA = user

  ctx.body = response.getData()
}

async function setUser(ctx) {
  const { id } = ctx.params

  const result = await service.setUser({ ctx, id })

  const response = new Response()
  if (result) {
    response.SUCCESS = 200
  } else {
    response.FAIL = 500
  }

  ctx.body = response.getData()
}

async function delUser(ctx) {
  const { id } = ctx.params

  const result = await service.delUser({ id })

  const response = new Response()

  if (result) {
    response.SUCCESS = 200
    response.DATA = {}
  } else {
    response.FAIL = 500
    response.DATA = '删除错误'
  }
  ctx.body = response.getData()
}

module.exports = {
  newUser,
  setUser,
  getUser,
  delUser,
  login,
  getUserByPhone,
}
