const service = require('../../service/order')
const Response = require('../../utils/response')

async function newOrder(ctx) {
  // const order = ctx.request.body;

  const result = await service.newOrder({ ctx })

  const response = new Response()
  if (result) {
    response.SUCCESS = 200
  } else {
    response.FAIL = 500
  }

  ctx.body = response.getData()
}

async function getOrder(ctx) {
  const { id } = ctx.params

  const { order } = await service.getOrder({ ctx, id })

  const response = new Response()
  response.SUCCESS = 200
  response.DATA = order

  ctx.body = response.getData()
}

async function getOrders(ctx) {
  const { userId } = ctx.params

  const orders = await service.getOrders({ ctx, userId })

  const response = new Response()
  response.SUCCESS = 200
  response.DATA = orders

  ctx.body = response.getData()
}

async function setOrder(ctx) {
  const { id } = ctx.params

  const result = await service.setOrder({ ctx, id })

  const response = new Response()
  if (result) {
    response.SUCCESS = 200
  } else {
    response.FAIL = 500
  }

  ctx.body = response.getData()
}

async function delOrder(ctx) {
  const { id } = ctx.params

  const result = await service.delOrder({ ctx, id })

  const response = new Response()
  if (result) {
    response.SUCCESS = 200
  } else {
    response.FAIL = 500
  }

  ctx.body = response.getData()
}

module.exports = {
  newOrder, getOrder, getOrders, setOrder, delOrder,
}
