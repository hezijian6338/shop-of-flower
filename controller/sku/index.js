const service = require("../../service/sku");
const Response = require("../../utils/response");

async function _newSku(ctx) {
  const result = await service.newSku({ ctx });

  let res = new Response();

  if (result) {
    res.SUCCESS = 200;
  } else {
    res.FAIL = 500;
  }

  ctx.body = res.getData();
}

async function _getSku(ctx) {
  const id = ctx.params.id;

  const { sku } = await service.getSku({ ctx, id });

  let res = new Response();
  res.SUCCESS = 200;
  res.DATA = sku;

  ctx.body = res.getData();
}

async function _setSku(ctx) {
  const id = ctx.params.id;

  let result = await service.setSku({ ctx, id });

  let res = new Response();
  res.SUCCESS = 200;
  res.DATA = result;

  ctx.body = res.getData();
}

async function _delSku(ctx) {
  const id = ctx.params.id;

  let result = await service.delSku({ ctx, id });

  let res = new Response();

  if (result) {
    res.SUCCESS = 200;
  } else {
    res.FAIL = 500;
  }

  ctx.body = res.getData();
}

module.exports = { _newSku, _getSku, _setSku, _delSku };
