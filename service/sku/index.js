const { mysql } = require("../../database/mysql");
const Sku = require("../../model/sku");
const Uuid = require("../../utils/uuid");

async function newSku({ ctx }) {
  let new_sku_info = {};
  new_sku_info = ctx.request.body;

  console.log(new_sku_info);

  let sku = new Sku(new_sku_info);

  sku.id = new Uuid().uuid;
  sku.created_date = new Date().getTime();
  sku.updated_date = new Date().getTime();

  const result = await mysql("sku").insert(sku.getData().sku);

  console.log(result);

  return result[0] === 0;
}

async function getSku({ ctx, id }) {
  let sku_info = {};
  sku_info = await mysql("sku")
    .where({
      id: id
    })
    .select();

  let sku = new Sku(sku_info[0]);

  return sku.getData();
}

async function setSku({ ctx, id }) {
  let update_sku_info = {};
  update_sku_info = ctx.request.body;

  let sku = new Sku(update_sku_info);
  sku.updated_date = new Date().getTime();

  await mysql("sku")
    .where({
      id: id
    })
    .update(sku.getData().sku_with_no_null);
}

async function delSku({ ctx, id }) {
  const result = await mysql("sku")
    .where({ id: id })
    .del();

  return result === 1;
}

module.exports = { newSku, getSku, setSku, delSku };
