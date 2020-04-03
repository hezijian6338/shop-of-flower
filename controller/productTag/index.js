const service = require('../../service/productTag')
const Response = require('../../utils/response')

async function newProductTag(ctx) {
  const result = await service.newProductTag({ ctx })

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

async function getProductTag(ctx) {
  const { id } = ctx.params

  const { productTag } = await service.getProductTag({ ctx, id })

  // 回应体抽离对象实现
  const body = new Response()
  body.SUCCESS = 200
  body.DATA = productTag

  // 返回信息到回应体
  ctx.body = body.getData()
}

async function setProductTag(ctx) {
  const { id } = ctx.params
  const result = await service.setProductTag({ ctx, id })

  // 回应体抽离对象实现
  const body = new Response()

  if (result) {
    body.SUCCESS = 200
    body.DATA = {}
  } else {
    body.FAIL = 500
  }

  // 返回信息到回应体
  ctx.body = body.getData()
}

async function delProductTag(ctx) {
  const { id } = ctx.params
  const result = await service.delProductTag({ ctx, id })

  // 回应体抽离对象实现
  const body = new Response()

  if (result) {
    body.SUCCESS = 200
    body.DATA = {}
  } else {
    body.FAIL = 500
  }

  // 返回信息到回应体
  ctx.body = body.getData()
}

async function getTagList(ctx) {
  const result = service.getTagList()

  // 回应体抽离对象实现
  const body = new Response()

  if (result) {
    body.SUCCESS = 200
    body.DATA = result
  } else {
    body.FAIL = 500
  }

  // 返回信息到回应体
  ctx.body = body.getData()
}

async function getProductListByTagName(ctx) {
  const { tagName } = ctx.params

  const result = service.getProductListByTagName({ tagName })

  // 回应体抽离对象实现
  const body = new Response()

  if (result) {
    body.SUCCESS = 200
    body.DATA = result
  } else {
    body.FAIL = 500
  }

  // 返回信息到回应体
  ctx.body = body.getData()
}

module.exports = {
  newProductTag, getProductTag, setProductTag, delProductTag, getTagList, getProductListByTagName,
}
