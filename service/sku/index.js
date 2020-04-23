const { mysql } = require('../../database/mysql')
const Sku = require('../../model/sku')
const Uuid = require('../../utils/uuid')

async function newSku({ ctx }) {
  let newSkuInfo = {}
  newSkuInfo = ctx.request.body

  // console.log(newSkuInfo);

  const sku = new Sku(newSkuInfo)

  sku.id = new Uuid().uuid
  // sku.updatedDate = new Date().getTime()
  sku.createdDate = new Date()

  const result = await mysql('sku').insert(sku.getData().sku)

  // console.log(result);

  return result[0] === 0 ? { result: true, id: sku.id } : { result: false }
}

async function getSku({ id }) {
  let skuInfo = {}
  skuInfo = await mysql('sku')
    .where({
      id,
    })
    .select()

  const sku = new Sku(skuInfo[0])

  return sku.getData()
}

async function setSku({ ctx, id }) {
  let updateSkuInfo = {}
  updateSkuInfo = ctx.request.body

  const sku = new Sku(updateSkuInfo)
  sku.updatedDate = new Date().getTime()


  const updateInfo = sku.getData().skuWithNoNull

  Reflect.deleteProperty(updateInfo, 'created_date')
  Reflect.deleteProperty(updateInfo, 'updated_date')

  const result = await mysql('sku')
    .where({
      id,
    })
    .update(updateInfo)

  return result === 1
}

async function delSku({ id }) {
  const result = await mysql('sku')
    .where({ id })
    .del()

  return result === 1
}

module.exports = {
  newSku, getSku, setSku, delSku,
}
