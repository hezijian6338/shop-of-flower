const { mysql } = require("../../database/mysql");
const User = require("../../model/user");
const Uuid = require("../../utils/uuid");
const Crypto = require("../../utils/ctypto");

/**
 * TODO: 检查密码是否正确
 */
async function login({ phone, password }) {
  let _password = await mysql("user")
    .where({
      phone: phone
    })
    .select("password");

  return new Crypto(password).hash === _password[0].password;
}

/**
 * TODO: 以用户电话检索用户信息
 */
async function getUserByPhone({ phone }) {
  let user_info = {};

  await mysql("user")
    .where({
      phone: phone
    })
    .select()
    .then(raw => {
      user_info = raw[0];
    });

  let user = new User(user_info);

  return user.getData();
}

async function newUser({ ctx }) {
  let new_user_info = {};
  new_user_info = ctx.request.body;

  let user = new User(new_user_info);
  user.id = new Uuid().uuid;
  user.password = new Crypto(user.password).hash;
  user.created_date = new Date().getTime();
  user.updated_date = new Date().getTime();

  // console.log(user.getData().user_with_no_null);

  const result = await mysql("user").insert(user.getData().user);

  return result[0] === 0;
}

async function getUser({ ctx, id }) {
  let user_info = await mysql("user")
    .where({ id: id })
    .select();

  let user = new User(user_info[0]);

  return user.getData();
}

async function setUser({ ctx, id }) {
  let update_user_info = {};
  update_user_info = ctx.request.body;

  let user = new User(update_user_info);
  user.updated_date = new Date().getTime();

  let result = await mysql("user")
    .where({
      id: id
    })
    .update(user.getData().user_with_no_null);

  return result === 1;
}

async function delUser({ ctx, id }) {
  const result = await mysql("user")
    .where({ id: id })
    .del();

  return result === 1;
}

module.exports = { newUser, getUser, setUser, delUser, login, getUserByPhone };
