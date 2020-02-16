const service = require("../../service/order");
const Response = require("../../utils/response");

async function _newOrder(ctx) {
  // const order = ctx.request.body;

  const result = await service.newOrder({ ctx });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function _getOrder(ctx) {
  const id = ctx.params.id;

  let { order } = await service.getOrder({ ctx, id });

  let response = new Response();
  response.SUCCESS = 200;
  response.DATA = order;

  ctx.body = response.getData();
}

async function _setOrder(ctx) {
  const id = ctx.params.id;

  const result = await service.setOrder({ ctx, id });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function _delOrder(ctx) {
  const id = ctx.params.id;

  const result = await service.delOrder({ ctx, id });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

module.exports = { _newOrder, _getOrder, _setOrder, _delOrder };
