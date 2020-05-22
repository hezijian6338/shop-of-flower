# shop-of-flower
拥有完整的管理端 (element-admin)和用户端 (H5)

## 项目路径
### controller
```
controller
├── cart (购物车)
│   └── index.js
├── home (首页)
│   └── index.js
├── order (订单)
│   └── index.js
├── prodcut (商品)
│   └── index.js
├── productTag (商品标签)
│   └── index.js
├── sku (商品规格)
│   └── index.js
└── user (用户)
    └── index.js
```
这里是 node后台被前台的接口请求目的地
### middleware
```
middleware
├── catch-async.js
└── logger-async.js
```
### service
```
service (业务逻辑: 增删查改)
├── cart (购物车)
│   └── index.js
├── order (订单)
│   └── index.js
├── product (商品)
│   └── index.js
├── productTag (商品标签)
│   └── index.js
├── sku (商品规格)
│   └── index.js
└── user (用户信息)
    └── index.js
```
### model
```
model (数据结构层 -- 规范数据格式)
├── cart (购物车)
│   └── index.js
├── index.js
├── order (订单)
│   └── index.js
├── product (商品)
│   └── index.js
├── productTag (商品标签)
│   └── index.js
├── sku (商品规格)
│   └── index.js
└── user (用户信息)
    └── index.js
```
### database
```
database (knex的配置与连接)
├── ShopOfFlower\ (1).sql (数据脚本)
├── config.js (用户参数)
└── mysql.js (连接参数)
```
### utils
```
utils
├── ctypto.js (密码加密)
├── response.js (回应体抽象类)
├── uuid.js (id自动生成唯一字符串)
└── verify.js (JWT验证类)
```
## 执行过程
1. 安装 nodejs
2. 终端进去项目根目录
3. npm install
4. node index.js

## NodeJS
### Koa2
花店商城后台
## Mysql
(参考 database路径下的 sql脚本)
