const service = require('../../service/product')
const Response = require('../../utils/response')

class ProductController {
  static async newProduct(ctx) {
    const result = await service.newProduct({ ctx })

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

  // 使用 service传递过来的信息, 返回接口信息
  static async getProduct(ctx) {
    const { id } = ctx.params

    const { product } = await service.getProduct({ ctx, id })

    // 回应体抽离对象实现
    const body = new Response()
    body.SUCCESS = 200
    body.DATA = product

    // 返回信息到回应体
    ctx.body = body.getData()
  }

  static async setProduct(ctx) {
    const { id } = ctx.params
    const result = await service.setProduct({ ctx, id })

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

  static async delProduct(ctx) {
    const { id } = ctx.params
    const result = await service.delProduct({ ctx, id })

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

  static async getProducts(ctx) {
    const products = await service.getProducts({ ctx })

    // 回应体抽离对象实现
    const body = new Response()
    body.SUCCESS = 200
    body.DATA = products

    // 返回信息到回应体
    ctx.body = body.getData()
  }
}

// 路由传递进来 ctx


// module.exports = {
//   newProduct, getProduct, setProduct, delProduct, getProducts,
// }
module.exports = ProductController
