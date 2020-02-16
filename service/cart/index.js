const { mysql } = require("../../database/mysql");
const Cart = require("../../model/cart");
const Uuid = require("../../utils/uuid");
const { getProduct } = require("../product");
const { getSku } = require("../sku");

async function newCart({ ctx }) {
  let new_cart_info = {};
  new_cart_info = ctx.request.body;

  let cart = new Cart(new_cart_info);
  cart.id = new Uuid().uuid;
  cart.created_date = new Date().getTime();
  cart.updated_date = new Date().getTime();

  // TODO: 关联查询信息, 再进行信息添加 (用代码组合而非查询语句组合, 简单快捷...)
  const product_id = cart.product_id;
  const sku_id = cart.sku_id;

  const { product_with_no_null } = await getProduct({ id: product_id });
  cart.name = product_with_no_null.name;

  const { sku_with_no_null } = await getSku({ id: sku_id });
  cart.standard = sku_with_no_null.standard;
  cart.price = sku_with_no_null.price;
  cart.photo = sku_with_no_null.photo;

  const result = await mysql("cart").insert(cart.getData().cart);

  return result[0] === 0;
}

async function getCart({ ctx, id }) {
  let cart_info = await mysql("cart")
    .where({
      id: id
    })
    .select();

  let cart = new Cart(cart_info[0]);

  return cart.getData();
}

async function setCart({ ctx, id }) {
  let update_cart_info = {};
  update_cart_info = ctx.request.body;

  let cart = new Cart(update_cart_info);

  cart.updated_date = new Date().getTime();

  const result = await mysql("cart")
    .where({
      id: id
    })
    .update(cart.getData().cart_with_no_null);

  return result === 1;
}

async function delCart({ ctx, id }) {
  const result = await mysql("cart")
    .where({
      id: id
    })
    .del();
  return result === 1;
}

module.exports = { newCart, getCart, setCart, delCart };
