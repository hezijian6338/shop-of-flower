/* eslint-disable no-console */
/* eslint-disable func-names */
const verify = require('../utils/verify')

const jwtSecret = 'jwtSecret'

function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function () {
  return async function (ctx, next) {
    if (!ctx.url.includes('/login') && !ctx.url.includes('/tag') && !ctx.url.includes('/product') && !ctx.url.includes('/sku')) {
      const { authorization } = ctx.header

      const username = await verify(authorization.split(',')[0].split(' ')[1], jwtSecret)
      // console.log(username)
      // console.log(Reflect.deleteProperty(ctx.request.header, 'authorization'))
      // console.log(ctx)
      ctx.body = { phone: username }
      await next()
    } else {
      log(ctx)
      await next()
    }
  }
}
