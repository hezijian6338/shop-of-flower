const configs = require('./config');

// eslint-disable-next-line import/order
const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.user,
    password: configs.mysql.pass,
    database: configs.mysql.db,
  },
});
// 初始化 SDK
// 将基础配置和 sdk.config 合并传入 SDK 并导出初始化完成的 SDK
module.exports = { mysql: knex };
