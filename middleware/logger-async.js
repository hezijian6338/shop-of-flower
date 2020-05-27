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
      // TODO: 写法一, 判定字段是否为空 (需要对错误发生点比较熟悉)
      const { authorization } = ctx.header
      if (authorization === null || authorization === undefined) {
        ctx.body = { message: '授权错误' }
      } else {
        const username = await verify(authorization.split(',')[0].split(' ')[1], jwtSecret)
        ctx.body = { phone: username }
        await next()
      }

      // TODO: 写法二, 直接 try/catch进行捕获异常, 这样不用过分关注可能发生的错误问题点在哪
      // const { authorization } = ctx.header
      // try {
      //   const username = await verify(authorization.split(',')[0].split(' ')[1], jwtSecret)
      //   ctx.body = { phone: username }
      //   await next()
      // } catch (e) {
      //   console.log(e)
      //   ctx.body = { message: '授权错误' }
      // }
    } else {
      log(ctx)
      await next()
    }
  }
}
