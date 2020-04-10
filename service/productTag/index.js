const { mysql } = require('../../database/mysql')
const ProductTag = require('../../model/productTag')
const Uuid = require('../../utils/uuid')

async function newProductTag({ ctx }) {
  let newProductTagInfo = {}

  newProductTagInfo = ctx.request.body

  const productTag = new ProductTag(newProductTagInfo)

  productTag.id = new Uuid().uuid
  productTag.createdDate = new Date()
  // productTag.update_date = Date.now()

  const result = await mysql('product_tag').insert(productTag.getData().productTag)

  return result[0] === 0 ? { result: true, id: productTag.id } : { result: false }
}

async function getProductTag({ id }) {
  const productTagInfo = await (await mysql('product_tag').where({ id })).select()

  const productTag = new ProductTag(productTagInfo[0])

  return productTag.getData()
}

async function setProductTag({ ctx, id }) {
  let updateProductTagInfo = {}

  updateProductTagInfo = ctx.request.body

  const productTag = new ProductTag(updateProductTagInfo)

  productTag.update_date = Date.now()

  const result = await mysql('product_tag').where({ id }).update(productTag.getData().productTagWithNoNull)

  return result === 1
}

async function delProductTag({ id }) {
  const result = await mysql('product_tag')
    .where({ id })
    .del()

  return result === 1
}

// TODO: 查找标签列表 (非重复)
async function getTagList() {
  const tagList = []

  const result = await mysql('product_tag').distinct('tag_name')

  result.forEach((tag) => {
    tagList.push(tag.tag_name)
  })

  return tagList
}

// TODO: 根据 tag_name返回 tag信息列表 (包括 product_id)
async function getProductListByTagName({ tagName }) {
  let tagList = Array

  const result = await mysql('product_tag').where({ tag_name: tagName }).select()

  console.log(result)

  tagList = result

  return tagList
}

module.exports = {
  getProductTag, setProductTag, newProductTag, delProductTag, getTagList, getProductListByTagName,
}
