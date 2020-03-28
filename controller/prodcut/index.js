const service = require("../../service/product");
const Response = require("../../utils/response");

// 路由传递进来 ctx

async function _newProduct(ctx) {
  const result = await service.newProduct({ ctx });

  // 回应体抽离对象实现
  let body = new Response();

  if (result) {
    // 配置成功与否和代码参数
    body.SUCCESS = 200;
    // 配置返回内容体
    body.DATA = {};
  } else {
    body.FAIL = 500;
  }

  // 返回信息到回应体
  ctx.body = body.getData();
}

// 使用 service传递过来的信息, 返回接口信息
async function _getProduct(ctx) {
  const id = ctx.params.id;

  const { product } = await service.getProduct({ ctx, id });

  // 回应体抽离对象实现
  let body = new Response();
  body.SUCCESS = 200;
  body.DATA = product;

  // 返回信息到回应体
  ctx.body = body.getData();
}

async function _setProduct(ctx) {
  const id = ctx.params.id;
  const result = await service.setProduct({ ctx, id });

  // 回应体抽离对象实现
  let body = new Response();

  if (result) {
    body.SUCCESS = 200;
    body.DATA = {};
  } else {
    body.FAIL = 500;
  }

  // 返回信息到回应体
  ctx.body = body.getData();
}

async function _delProduct(ctx) {
  const id = ctx.params.id;
  const result = await service.delProduct({ ctx, id });

  // 回应体抽离对象实现
  let body = new Response();

  if (result) {
    body.SUCCESS = 200;
    body.DATA = {};
  } else {
    body.FAIL = 500;
  }

  // 返回信息到回应体
  ctx.body = body.getData();
}

async function _getProducts(ctx) {
  const products = await service.getProducts({ ctx })

  // 回应体抽离对象实现
  let body = new Response();
  body.SUCCESS = 200;
  body.DATA = products;

  // 返回信息到回应体
  ctx.body = body.getData();
}

module.exports = { _newProduct, _getProduct, _setProduct, _delProduct, _getProducts };
