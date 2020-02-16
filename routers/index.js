const _user = require("../controller/user");
const _product = require("../controller/prodcut");
const _cart = require("../controller/cart");
const _sku = require("../controller/sku");
const _order = require("../controller/order");

// 路由中间件
const Router = require("koa-router");

// 首页路由
const index = new Router();
index.get("/index", async ctx => {});

// 个人信息页面路由
const user = new Router();
// 用户详细信息 (路径参数传递)
user.get("/user/:id", _user._getUser);
user.get("/user/phone/:phone", _user._getUserByPhone);
user.post("/user", _user._newUser);
// user = { phone: phone, password: password}
user.post("/user/login", _user._login);
// user = { all }
user.put("/user/:id", _user._setUser);
user.del("/user/:id", _user._delUser);

// 商品详情路由
const product = new Router();
// 主页详情 (路径参数传递)
product.get("/product/:id", _product._getProduct);
product.put("/product/:id", _product._setProduct);
product.post("/product", _product._newProduct);
product.delete("/product/:id", _product._delProduct);

// 购物车操作路由
const cart = new Router();
cart.get("/cart/:id", _cart._getCart);
cart.put("/cart/:id", _cart._setCart);
cart.post("/cart", _cart._newCart);
cart.delete("/cart/:id", _cart._delCart);

// 商品规格操作路由
const sku = new Router();
sku.get("/sku/:id", _sku._getSku);
sku.put("/sku/:id", _sku._setSku);
sku.post("/sku", _sku._newSku);
sku.delete("/sku/:id", _sku._delSku);

// 订单操作路由
const order = new Router();
order.get("/order/:id", _order._getOrder);
order.put("/order/:id", _order._setOrder);
order.post("/order", _order._newOrder);
order.delete("/order/:id", _order._delOrder);

// 付款路由
const pay = new Router();
// 微信付款路由
pay.get("/pay/wechat", async ctx => {});
// 支付宝付款路由
pay.get("/pay/alipay", async ctx => {});

module.exports = { index, user, product, pay, sku, cart, order };
