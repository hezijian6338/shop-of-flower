/* eslint-disable no-restricted-syntax */
const { mysql } = require('../../database/mysql')
const Product = require('../../model/product')
const Uuid = require('../../utils/uuid')
const SkuService = require('../sku')

async function newProduct({ ctx }) {
  // 实体类字段控制
  let newProductInfo = {}
  // 从请求体重获取信息
  newProductInfo = ctx.request.body

  // 配置一个合法的数据库对象进行操作
  const product = new Product(newProductInfo)

  // 还需要配置 id和 product_id
  product.id = new Uuid().uuid
  product.createdDate = new Date()
  // product.updated_date = new Date().getTime()

  /** 函数会返回两个值, 一个是带 null值, 一个是去除 null值. */

  // const { product_with_no_null } = product.getData();
  // console.log(product_with_no_null);

  // console.log(newProductInfo);

  // 执行数据库语句
  const result = await mysql('product').insert(product.getData().product)

  // console.log(result);

  return result[0] === 0 ? { result: true, id: product.id } : { result: false }
}

// 获取商品信息
async function getProduct({ id }) {
  // 查询 product表, 根据商品 id进行查询
  const productInfo = await mysql('product')
    .where({ product_id: id })
    .select()

  // 配置一个合法的对象给前端进行操作
  const product = new Product(productInfo[0])
  // product.id = Reflect.get(product_info, "id");
  // product.product_id = Reflect.get(product_info, "product_id");
  // product.name = Reflect.get(product_info, "name");
  // product.brief = Reflect.get(new_product_info, "brief");
  // product.content = Reflect.get(new_product_info, "content");
  // product.sku_ids = Reflect.get(product_info, "sku_ids");
  // product.photo = Reflect.get(product_info, "photo");

  return product.getData()
}

async function setProduct({ ctx, id }) {
  // 先检查是否存在该商品 (方法还没想好)

  // 定义字段内容 (此处应该有 entity层确认, 待补充)
  let updateProductInfo = {}

  // 把前端返回的数据存放到中间参数
  updateProductInfo = ctx.request.body

  // 配置一个合法的对象给数据库进行操作
  const product = new Product(updateProductInfo)

  // product.updatedDate = new Date().getTime()

  // TODO: 添加新判断, price是否为空
  if (product.price === null) {
    if (product.skuIds !== null) {
      const [skuId] = product.skuIds.split(',')
      const { sku } = await SkuService.getSku({ id: skuId })
      product.price = sku.price
    }
  }

  const updateInfo = product.getData().productWithNoNull

  Reflect.deleteProperty(updateInfo, 'created_date')
  Reflect.deleteProperty(updateInfo, 'updated_date')

  // 执行更新语句...
  const result = await mysql('product')
    .where({ product_id: id })
    // 这里使用没有 null值的对象, 因为这样可以定向更新数据
    .update(updateInfo)

  return result === 1
}

async function delProduct({ id }) {
  // 直接执行删除...
  const result = await mysql('product')
    .where({ product_id: id })
    .del()

  return result === 1
}

// TODO: 查询所有的商品信息
async function getProducts() {
  const result = await mysql('product').select()

  const products = []

  // for (const product of result) {
  //   const skuIds = product.sku_ids.split(',')

  //   const productWithPirce = new Map()

  //   // 自身属性复制一个数组中
  //   const propertys = Object.getOwnPropertyNames(product)

  //   // 遍历数组内容, 对新复制的数组中为 null值得进行剔除... 返回一个无空值的结果对象
  //   propertys.forEach((property) => {
  //     Reflect.set(productWithPirce, property, Reflect.get(product, property))
  //   })

  //   let skuWithNoNull = {}

  //   // eslint-disable-next-line no-await-in-loop
  //   await SkuService.getSku({ id: skuIds[0] }).then((sku) => {
  //     skuWithNoNull = sku.skuWithNoNull

  //     // console.log(skuWithNoNull)

  //     Reflect.set(productWithPirce, 'price', skuWithNoNull.price)
  //     products.push(productWithPirce)
  //   })
  //   // console.log(productWithPirce)
  // }

  result.forEach((product) => {
    products.push(product)
  })

  return products
}

module.exports = {
  getProduct, setProduct, delProduct, newProduct, getProducts,
}
