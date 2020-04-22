const service = require('../../service/order')
const Response = require('../../utils/response')

async function newOrder(ctx) {
  // const order = ctx.request.body;

  const result = await service.newOrder({ ctx })

  // 回应体抽离对象实现
  const body = new Response()

  if (result.result) {
    // 配置成功与否和代码参数
    body.SUCCESS = 200
    // 配置返回内容体
    body.DATA = result
  } else {
    body.FAIL = 500
  }

  // 返回信息到回应体
  ctx.body = body.getData()
}

async function getOrder(ctx) {
  const { id } = ctx.params

  const { order } = await service.getOrder({ ctx, id })

  const response = new Response()
  response.SUCCESS = 200
  response.DATA = order

  ctx.body = response.getData()
}

async function getOrdersByUser(ctx) {
  const { userId } = ctx.params

  const orders = await service.getOrdersByUser({ ctx, userId })

  const response = new Response()
  response.SUCCESS = 200
  response.DATA = orders

  ctx.body = response.getData()
}

async function getOrders(ctx) {
  const orders = await service.getOrders()

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
  newOrder, getOrder, getOrders, getOrdersByUser, setOrder, delOrder,
}
