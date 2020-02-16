const { mysql } = require("../../database/mysql");
const Cart = require("../../model/cart");
const Uuid = require("../../utils/uuid");

async function newCart({ ctx }) {
  let new_cart_info = {};
  new_cart_info = ctx.request.body;

  let cart = new Cart(new_cart_info);
  cart.id = new Uuid().uuid;
  cart.created_date = new Date().getTime();
  cart.updated_date = new Date().getTime();

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
