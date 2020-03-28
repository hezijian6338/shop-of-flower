const { mysql } = require("../../database/mysql");
const Order = require("../../model/order");
const Uuid = require("../../utils/uuid");
const { getProduct } = require("../product");
const { getSku } = require("../sku");

async function newOrder({ ctx }) {
  let new_order_info = {};
  new_order_info = ctx.request.body;

  let order = new Order(new_order_info);
  order.id = new Uuid().uuid;
  order.created_date = new Date().getTime();
  order.updated_date = new Date().getTime();

  // TODO: 关联查询信息, 再进行信息添加 (用代码组合而非查询语句组合, 简单快捷...)
  const product_id = order.product_id;
  const sku_id = order.sku_id;

  const { product_with_no_null } = await getProduct({ id: product_id });
  order.name = product_with_no_null.name;

  const { sku_with_no_null } = await getSku({ id: sku_id });
  order.standard = sku_with_no_null.standard;
  order.price = sku_with_no_null.price;
  order.photo = sku_with_no_null.photo;

  const result = await mysql("order").insert(order.getData().order);

  return result[0] === 0 ? { result: true, id: order.id } : { result: false };
}

async function getOrder({ ctx, id }) {
  let order_info = await mysql("order")
    .where({
      id: id
    })
    .select();

  const order = new Order(order_info[0]);

  return order.getData();
}

async function setOrder({ ctx, id }) {
  let update_order_info = {};
  update_order_info = ctx.request.body;

  let order = new Order(update_order_info);
  order.updated_date = new Date().getTime();

  // TODO: 检查更新信息字段中有没有更新到 product_id和 sku_id
  if (order.product_id != null) {
    const product_id = order.product_id;

    const { product_with_no_null } = await getProduct({ id: product_id });
    order.name = product_with_no_null.name;
  }

  if (order.sku_id != null) {
    const sku_id = order.sku_id;

    const { sku_with_no_null } = await getSku({ id: sku_id });
    order.standard = sku_with_no_null.standard;
    order.price = sku_with_no_null.price;
    order.photo = sku_with_no_null.photo;
  }

  const result = await mysql("order")
    .where({
      id: id
    })
    .update(order.getData().order_with_no_null);

  return result === 1;
}

async function delOrder({ ctx, id }) {
  const result = await mysql("order")
    .where({ id: id })
    .del();

  console.log(result);

  return result === 1;
}

module.exports = { newOrder, getOrder, setOrder, delOrder };
