const service = require('../../service/cart');
const Response = require('../../utils/response');

async function newCart(ctx) {
  const result = await service.newCart({ ctx });

  const response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function getCart(ctx) {
  const { id } = ctx.params;

  const { cart } = await service.getCart({ ctx, id });

  const response = new Response();
  response.SUCCESS = 200;
  response.DATA = cart;

  ctx.body = response.getData();
}

async function getCarts(ctx) {
  const { userId } = ctx.params;

  const carts = await service.getCarts({ ctx, userId });

  const response = new Response();
  response.SUCCESS = 200;
  response.DATA = carts;

  ctx.body = response.getData();
}

async function setCart(ctx) {
  const { id } = ctx.params;

  const result = await service.setCart({ ctx, id });

  const response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

async function delCart(ctx) {
  const { id } = ctx.params;

  const result = await service.delCart({ id });

  const response = new Response();
  if (result) {
    response.SUCCESS = 200;
  } else {
    response.FAIL = 500;
  }

  ctx.body = response.getData();
}

module.exports = {
  newCart, getCart, getCarts, setCart, delCart,
};
