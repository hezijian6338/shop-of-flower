const service = require('../../service/cart')
const Response = require('../../utils/response')

class CartController {
  static async newCart(ctx) {
    const result = await service.newCart({ ctx })

    const response = new Response()
    if (result.result) {
      response.SUCCESS = 200
      response.DATA = result
    } else {
      response.FAIL = 500
    }

    ctx.body = response.getData()
  }

  static async getCart(ctx) {
    const { id } = ctx.params

    const { cart } = await service.getCart({ ctx, id })

    const response = new Response()
    response.SUCCESS = 200
    response.DATA = cart

    ctx.body = response.getData()
  }

  static async getCarts(ctx) {
    const { userId } = ctx.params

    const carts = await service.getCarts({ ctx, userId })

    const response = new Response()
    response.SUCCESS = 200
    response.DATA = carts

    // console.log(carts)

    ctx.body = response.getData()
  }

  static async setCart(ctx) {
    const { id } = ctx.params

    const result = await service.setCart({ ctx, id })

    const response = new Response()
    if (result) {
      response.SUCCESS = 200
    } else {
      response.FAIL = 500
    }

    ctx.body = response.getData()
  }

  static async delCart(ctx) {
    const { id } = ctx.params

    const result = await service.delCart({ id })

    const response = new Response()
    if (result) {
      response.SUCCESS = 200
    } else {
      response.FAIL = 500
    }

    ctx.body = response.getData()
  }
}


// module.exports = {
//   newCart, getCart, getCarts, setCart, delCart,
// }
module.exports = CartController
