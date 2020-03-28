const { mysql } = require('../../database/mysql');
const Sku = require('../../model/sku');
const Uuid = require('../../utils/uuid');

async function newSku({ ctx }) {
  let newSkuInfo = {};
  newSkuInfo = ctx.request.body;

  // console.log(newSkuInfo);

  const sku = new Sku(newSkuInfo);

  sku.id = new Uuid().uuid;
  sku.created_date = new Date().getTime();
  sku.updated_date = new Date().getTime();

  const result = await mysql('sku').insert(sku.getData().sku);

  // console.log(result);

  return result[0] === 0;
}

async function getSku({ id }) {
  let skuInfo = {};
  skuInfo = await mysql('sku')
    .where({
      id,
    })
    .select();

  const sku = new Sku(skuInfo[0]);

  return sku.getData();
}

async function setSku({ ctx, id }) {
  let updateSkuInfo = {};
  updateSkuInfo = ctx.request.body;

  const sku = new Sku(updateSkuInfo);
  sku.updated_date = new Date().getTime();

  await mysql('sku')
    .where({
      id,
    })
    .update(sku.getData().sku_with_no_null);
}

async function delSku({ id }) {
  const result = await mysql('sku')
    .where({ id })
    .del();

  return result === 1;
}

module.exports = {
  newSku, getSku, setSku, delSku,
};
