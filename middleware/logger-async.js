/* eslint-disable no-console */
/* eslint-disable func-names */
const verify = require('../utils/verify')

const jwtSecret = 'jwtSecret'

function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function () {
  return async function (ctx, next) {
    log(ctx)
    // console.log(ctx.url)
    if (!ctx.url.includes('/login') && !ctx.url.includes('/tag') && !ctx.url.includes('/product') && !ctx.url.includes('/sku')) {
      const { authorization } = ctx.header
      if (authorization === null || authorization === undefined) {
        ctx.body = { message: '授权错误' }
      } else {
        const username = await verify(authorization.split(',')[0].split(' ')[1], jwtSecret)
        ctx.body = { phone: username }
        await next()
      }
    } else {
      log(ctx)
      await next()
    }
  }
}
