const { mysql } = require('../../database/mysql');
const Cart = require('../../model/cart');
const Uuid = require('../../utils/uuid');
const { getProduct } = require('../product');
const { getSku } = require('../sku');
const { getUser } = require('../user');

async function newCart({ ctx }) {
  let new_cart_info = {};
  new_cart_info = ctx.request.body;

  const cart = new Cart(new_cart_info);
  cart.id = new Uuid().uuid;
  cart.created_date = new Date().getTime();
  cart.updated_date = new Date().getTime();

  // TODO: 关联查询信息, 再进行信息添加 (用代码组合而非查询语句组合, 简单快捷...)
  const { product_id } = cart;
  const { sku_id } = cart;

  const { product_with_no_null } = await getProduct({ id: product_id });
  cart.name = product_with_no_null.name;

  const { sku_with_no_null } = await getSku({ id: sku_id });
  cart.standard = sku_with_no_null.standard;
  cart.price = sku_with_no_null.price;
  cart.photo = sku_with_no_null.photo;

  const result = await mysql('cart').insert(cart.getData().cart);

  return result[0] === 0 ? { result: true, id: cart.id } : { result: false };
}

async function getCart({ ctx, id }) {
  const cart_info = await mysql('cart')
    .where({
      id,
    })
    .select();

  const cart = new Cart(cart_info[0]);

  return cart.getData();
}

// TODO: 根据用户查询该用户的购物车列表
async function getCarts({ ctx, userId }) {
  // TODO: 查询用户信息, 得出用户的购物车列表
  const { user } = getUser(userId);
  // 取订单列表为数组
  const cartIds = user.cart_ids().split(',');

  // TODO: 构建购物车列表详细信息
  const carts = Array;
  for (const cartId of cartIds) {
    // 一个一个购物车 id查询
    const cartInfo = await mysql('cart')
      .where({
        id: cartId,
      })
      .select();

    // 插入数组列表中
    carts.push(cartInfo[0]);
  }

  return carts;
}

async function setCart({ ctx, id }) {
  let update_cart_info = {};
  update_cart_info = ctx.request.body;

  const cart = new Cart(update_cart_info);

  cart.updated_date = new Date().getTime();

  // TODO: 检查更新信息字段中有没有更新到 product_id和 sku_id
  if (cart.product_id != null) {
    const { product_id } = cart;

    const { product_with_no_null } = await getProduct({ id: product_id });
    cart.name = product_with_no_null.name;
  }

  if (cart.sku_id != null) {
    const { sku_id } = cart;

    const { sku_with_no_null } = await getSku({ id: sku_id });
    cart.standard = sku_with_no_null.standard;
    cart.price = sku_with_no_null.price;
    cart.photo = sku_with_no_null.photo;
  }

  const result = await mysql('cart')
    .where({
      id,
    })
    .update(cart.getData().cart_with_no_null);

  return result === 1;
}

async function delCart({ ctx, id }) {
  const result = await mysql('cart')
    .where({
      id,
    })
    .del();
  return result === 1;
}

module.exports = {
  newCart, getCart, getCarts, setCart, delCart,
};
