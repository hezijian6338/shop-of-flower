const Router = require('koa-router')
const user = require('../controller/user')
const product = require('../controller/prodcut')
const cart = require('../controller/cart')
const sku = require('../controller/sku')
const order = require('../controller/order')
const productTag = require('../controller/productTag')

// 路由中间件

// const exp = new Router()


// 首页路由
const index = new Router()
// index.get('/index', async (ctx) => { });

// 个人信息页面路由
const rUser = new Router()
// 用户详细信息 (路径参数传递)
rUser.get('/user/:id', user.getUser)
rUser.get('/user/phone/:phone', user.getUserByPhone)
// user = { all }
rUser.post('/user', user.newUser)
// user = { phone: phone, password: password}
rUser.post('/login', user.login)
// user = { all }
rUser.put('/user/:id', user.setUser)
rUser.del('/user/:id', user.delUser)

// 商品详情路由
const rProduct = new Router()
// 主页详情 (路径参数传递)
rProduct.get('/product/list', product.getProducts)
// 根据 id获取商品信息
rProduct.get('/product/:id', product.getProduct)
rProduct.put('/product/:id', product.setProduct)
// product = { all }
rProduct.post('/product', product.newProduct)
rProduct.delete('/product/:id', product.delProduct)

// 购物车操作路由
const rCart = new Router()
// 根据用户信息查询购物车列表信息
rCart.get('/cart/list/user/:userId', cart.getCarts)
// 根据购物车 id查询信息
rCart.get('/cart/:id', cart.getCart)
rCart.put('/cart/:id', cart.setCart)
// cart = { all }
rCart.post('/cart', cart.newCart)
rCart.delete('/cart/:id', cart.delCart)

// 商品规格操作路由
const rSku = new Router()
rSku.get('/sku/:id', sku.getSku)
rSku.put('/sku/:id', sku.setSku)
// cart = { all }
rSku.post('/sku', sku.newSku)
rSku.delete('/sku/:id', sku.delSku)

// 订单操作路由
const rOrder = new Router()
// 订单列表
rOrder.get('/order/list/user/:userId', order.getOrdersByUser)
// 订单列表
rOrder.get('/order/list', order.getOrders)
// 订单查询
rOrder.get('/order/:id', order.getOrder)
rOrder.put('/order/:id', order.setOrder)
// order = { all }
rOrder.post('/order', order.newOrder)
rOrder.delete('/order/:id', order.delOrder)

const rProductTag = new Router()
// 产品标签列表
rProductTag.get('/tag/list', productTag.getTagList)
// 根据标签名字查询产品列表
rProductTag.get('/tag/:tagName/product', productTag.getProductListByTagName)
// 添加产品标签
rProductTag.post('/tag', productTag.newProductTag)
// 编辑产品标签
rProductTag.put('/tag/:id', productTag.setProductTag)
// 删除产品标签
rProductTag.delete('/tag/:id', productTag.delProductTag)

// 付款路由
const pay = new Router()
// 微信付款路由
// pay.get('/pay/wechat', async (ctx) => { });
// 支付宝付款路由
// pay.get('/pay/alipay', async (ctx) => { });

module.exports = {
  index, rUser, rProduct, pay, rSku, rCart, rOrder, rProductTag,
}
