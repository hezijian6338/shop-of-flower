/* eslint-disable no-console */
/* eslint-disable func-names */

module.exports = function () {
  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  }
}
