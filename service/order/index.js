const { mysql } = require('../../database/mysql');
const Order = require('../../model/order');
const Uuid = require('../../utils/uuid');
const { getProduct } = require('../product');
const { getSku } = require('../sku');
const { getUser } = require('../user');

async function newOrder({ ctx }) {
  let newOrderInfo = {};
  newOrderInfo = ctx.request.body;

  const order = new Order(newOrderInfo);
  order.id = new Uuid().uuid;
  order.created_date = new Date().getTime();
  order.updated_date = new Date().getTime();

  // TODO: 关联查询信息, 再进行信息添加 (用代码组合而非查询语句组合, 简单快捷...)
  const { productId } = order;
  const { skuId } = order;

  const { productWithNoNull } = await getProduct({ id: productId });
  order.name = productWithNoNull.name;

  const { skuWithNoNull } = await getSku({ id: skuId });
  order.standard = skuWithNoNull.standard;
  order.price = skuWithNoNull.price;
  order.photo = skuWithNoNull.photo;

  const result = await mysql('order').insert(order.getData().order);

  return result[0] === 0 ? { result: true, id: order.id } : { result: false };
}

async function getOrder({ id }) {
  const orderInfo = await mysql('order')
    .where({
      id,
    })
    .select();

  const order = new Order(orderInfo[0]);

  return order.getData();
}

async function getOrders({ userId }) {
  // TODO: 查询用户信息, 得出用户的订单列表
  const { user } = getUser(userId);
  // 取订单列表为数组
  const orderIds = user.order_ids().split(',');

  // TODO: 构建订单列表详细信息
  const orders = Array;
  await orderIds.array.forEach((orderId) => {
    // 一个一个订单 id查询
    const orderInfo = mysql('order')
      .where({
        id: orderId,
      })
      .select();

    // 插入数组列表中
    orders.push(orderInfo[0]);
  });

  return orders;
}

async function setOrder({ ctx, id }) {
  let updateOrderInfo = {};
  updateOrderInfo = ctx.request.body;

  const order = new Order(updateOrderInfo);
  order.updated_date = new Date().getTime();

  // TODO: 检查更新信息字段中有没有更新到 product_id和 sku_id
  if (order.product_id != null) {
    const { productId } = order;

    const { productWithNoNull } = await getProduct({ id: productId });
    order.name = productWithNoNull.name;
  }

  if (order.sku_id != null) {
    const { skuId } = order;

    const { skuWithNoNull } = await getSku({ id: skuId });
    order.standard = skuWithNoNull.standard;
    order.price = skuWithNoNull.price;
    order.photo = skuWithNoNull.photo;
  }

  const result = await mysql('order')
    .where({
      id,
    })
    .update(order.getData().order_with_no_null);

  return result === 1;
}

async function delOrder({ id }) {
  const result = await mysql('order')
    .where({ id })
    .del();

  // console.log(result);

  return result === 1;
}

module.exports = {
  newOrder, getOrder, getOrders, setOrder, delOrder,
};
