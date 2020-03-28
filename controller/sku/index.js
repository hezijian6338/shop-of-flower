const service = require('../../service/sku')
const Response = require('../../utils/response')

async function newSku(ctx) {
  const result = await service.newSku({ ctx })

  const res = new Response()

  if (result) {
    res.SUCCESS = 200
  } else {
    res.FAIL = 500
  }

  ctx.body = res.getData()
}

async function getSku(ctx) {
  const { id } = ctx.params

  const { sku } = await service.getSku({ ctx, id })

  const res = new Response()
  res.SUCCESS = 200
  res.DATA = sku

  ctx.body = res.getData()
}

async function setSku(ctx) {
  const { id } = ctx.params

  const result = await service.setSku({ ctx, id })

  const res = new Response()
  res.SUCCESS = 200
  res.DATA = result

  ctx.body = res.getData()
}

async function delSku(ctx) {
  const { id } = ctx.params

  const result = await service.delSku({ ctx, id })

  const res = new Response()

  if (result) {
    res.SUCCESS = 200
  } else {
    res.FAIL = 500
  }

  ctx.body = res.getData()
}

module.exports = {
  newSku, getSku, setSku, delSku,
}
