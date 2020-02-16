const service = require("../../service/user");
const Response = require("../../utils/response");

async function _login(ctx) {
  let { phone, password } = ctx.request.body;

  let result = await service.login({ phone, password });

  let response = new Response();

  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
    response.DATA = "密码错误";
  }

  ctx.body = response.getData();
}

async function _getUserByPhone(ctx) {
  let phone = ctx.params.phone;

  let { user } = await service.getUserByPhone({ phone });

  let response = new Response();
  response.SUCCESS = 200;
  response.DATA = user;

  ctx.body = response.getData();
}

async function _newUser(ctx) {
  // FIXME: 新增信息需要添加一个判断, 当前没正式数据, 先 hold住
  const result = await service.newUser({ ctx });

  console.log(result);

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  }

  ctx.body = response.getData();
}

async function _getUser(ctx) {
  const id = ctx.params.id;

  const { user } = service.getUser({ ctx, id });

  let response = new Response();
  response.SUCCESS = 200;
  response.DATA = user;

  ctx.body = response.getData();
}

async function _setUser(ctx) {
  const id = ctx.params.id;

  const result = await service.setUser({ ctx, id });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function _delUser(ctx) {
  const id = ctx.params.id;

  let result = await service.delUser({ id });

  let response = new Response();

  if (result) {
    response.SUCCESS = 200;
    response.DATA = {};
  } else {
    response.FAIL = 500;
    response.DATA = "删除错误";
  }
  ctx.body = response.getData();
}

module.exports = {
  _newUser,
  _setUser,
  _getUser,
  _delUser,
  _login,
  _getUserByPhone
};
