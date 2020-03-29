const Koa = require('koa') // koa v2
// 加载一个中间件
const bodyParser = require('koa-bodyparser')
const loggerAsync = require('./middleware/logger-async')
// 请求中 body的解析中间件
// 加载路由中间件
const router = require('./routers')
// 实例化 Koa
const app = new Koa()

// 加载中间件
app.use(loggerAsync())
app.use(bodyParser())
// 把对应的路由添加
app.use(router.index.routes())
app.use(router.rUser.routes())
app.use(router.rProduct.routes())
app.use(router.pay.routes())
app.use(router.rSku.routes())
app.use(router.rCart.routes())
app.use(router.rOrder.routes())

// 开启服务
app.listen(3000)
console.log('the server is starting at port 3000')
