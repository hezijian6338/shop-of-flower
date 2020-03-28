/* eslint-disable no-console */
/* eslint-disable func-names */
function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url);
}

module.exports = function () {
  return async function (ctx, next) {
    log(ctx);
    await next();
  };
};
