const { mysql } = require("../../database/mysql");
const Order = require("../../model/order");
const Uuid = require("../../utils/uuid");

async function newOrder({ ctx }) {
  let new_order_info = {};
  new_order_info = ctx.request.body;

  let order = new Order(new_order_info);
  order.id = new Uuid().uuid;
  order.created_date = new Date().getTime();
  order.updated_date = new Date().getTime();

  const result = await mysql("order").insert(order.getData().order);

  return result[0] === 0;
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
