const service = require("../../service/cart");
const Response = require("../../utils/response");

async function _newCart(ctx) {
  let result = await service.newCart({ ctx });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function _getCart(ctx) {
  const id = ctx.params.id;

  const { cart } = await service.getCart({ ctx, id });

  let response = new Response();
  response.SUCCESS = 200;
  response.DATA = cart;

  ctx.body = response.getData();
}

async function _getCarts(ctx) {
  const userId = ctx.params.userId;

  const carts = await service.getCarts({ ctx, userId });

  let response = new Response();
  response.SUCCESS = 200;
  response.DATA = carts;

  ctx.body = response.getData();
}

async function _setCart(ctx) {
  const id = ctx.params.id;

  let result = await service.setCart({ ctx, id });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function _delCart(ctx) {
  const id = ctx.params.id;

  const result = await service.delCart({ id });

  let response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

module.exports = { _newCart, _getCart, _getCarts, _setCart, _delCart };
