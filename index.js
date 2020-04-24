const Koa = require('koa') // koa v2
const koajwt = require('koa-jwt')

// 跨域组件
const cors = require('koa2-cors')

// 加载一个中间件
const bodyParser = require('koa-bodyparser')
const loggerAsync = require('./middleware/logger-async')
const catchAsync = require('./middleware/catch-async')

// 请求中 body的解析中间件
// 加载路由中间件
const router = require('./routers')
// 实例化 Koa
const app = new Koa()

// 具体参数我们在后面进行解释
app.use(cors({
  origin() {
    // if (ctx.url === '/test') {
    return '*' // 允许来自所有域名请求
    // }
    // return 'http://localhost:8080';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// 加载中间件
app.use(loggerAsync())
app.use(bodyParser())

// 秘钥
const jwtSecret = 'jwtSecret'

// Custom 401 handling if you don't want to expose koa-jwt errors to users
// app.use((ctx, next) => next().catch((err) => {
//   if (err.status === 401) {
//     ctx.status = 401
//     ctx.body = 'Protected resource, use Authorization header to get access\n'
//   } else {
//     throw err
//   }
// }))

app.use(koajwt({ secret: jwtSecret }).unless({
  path: [/^\/login/, /^\/product/, /^\/tag/, /^\/sku/],
}))

app.use(catchAsync())

// 把对应的路由添加
app.use(router.index.routes(), router.index.allowedMethods())
app.use(router.rUser.routes(), router.rUser.allowedMethods())
app.use(router.rProduct.routes(), router.rProduct.allowedMethods())
app.use(router.pay.routes(), router.pay.allowedMethods())
app.use(router.rSku.routes(), router.rSku.allowedMethods())
app.use(router.rCart.routes(), router.rCart.allowedMethods())
app.use(router.rOrder.routes(), router.rOrder.allowedMethods())
app.use(router.rProductTag.routes(), router.rProductTag.allowedMethods())

// 开启服务
app.listen(8333)
// eslint-disable-next-line no-console
console.log('the server is starting at port 8333')
