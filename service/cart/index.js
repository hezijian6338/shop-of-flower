const { mysql } = require('../../database/mysql');
const Cart = require('../../model/cart');
const Uuid = require('../../utils/uuid');
const { getProduct } = require('../product');
const { getSku } = require('../sku');
const { getUser } = require('../user');

async function newCart({ ctx }) {
  let newCartInfo = {};
  newCartInfo = ctx.request.body;

  const cart = new Cart(newCartInfo);
  cart.id = new Uuid().uuid;
  cart.created_date = new Date().getTime();
  cart.updated_date = new Date().getTime();

  // TODO: 关联查询信息, 再进行信息添加 (用代码组合而非查询语句组合, 简单快捷...)
  const { productId } = cart;
  const { skuId } = cart;

  const { productWithNoNull } = await getProduct({ id: productId });
  cart.name = productWithNoNull.name;

  const { skuWithNoNull } = await getSku({ id: skuId });
  cart.standard = skuWithNoNull.standard;
  cart.price = skuWithNoNull.price;
  cart.photo = skuWithNoNull.photo;

  const result = await mysql('cart').insert(cart.getData().cart);

  return result[0] === 0 ? { result: true, id: cart.id } : { result: false };
}

async function getCart({ id }) {
  const cartInfo = await mysql('cart')
    .where({
      id,
    })
    .select();

  const cart = new Cart(cartInfo[0]);

  return cart.getData();
}

// TODO: 根据用户查询该用户的购物车列表
async function getCarts({ userId }) {
  // TODO: 查询用户信息, 得出用户的购物车列表
  const { user } = getUser(userId);
  // 取订单列表为数组
  const cartIds = user.cart_ids().split(',');

  // TODO: 构建购物车列表详细信息
  const carts = Array;
  await cartIds.array.forEach((cartId) => {
    // 一个一个购物车 id查询
    const cartInfo = mysql('cart')
      .where({
        id: cartId,
      })
      .select();

    // 插入数组列表中
    carts.push(cartInfo[0]);
  });

  return carts;
}

async function setCart({ ctx, id }) {
  let updateCartInfo = {};
  updateCartInfo = ctx.request.body;

  const cart = new Cart(updateCartInfo);

  cart.updated_date = new Date().getTime();

  // TODO: 检查更新信息字段中有没有更新到 product_id和 sku_id
  if (cart.product_id != null) {
    const { productId } = cart;

    const { productWithNoNull } = await getProduct({ id: productId });
    cart.name = productWithNoNull.name;
  }

  if (cart.sku_id != null) {
    const { skuId } = cart;

    const { skuWithNoNull } = await getSku({ id: skuId });
    cart.standard = skuWithNoNull.standard;
    cart.price = skuWithNoNull.price;
    cart.photo = skuWithNoNull.photo;
  }

  const result = await mysql('cart')
    .where({
      id,
    })
    .update(cart.getData().cart_with_no_null);

  return result === 1;
}

async function delCart({ id }) {
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
