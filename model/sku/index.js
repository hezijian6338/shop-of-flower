class Sku {
  constructor({ id, standard, price, photo, created_date, updated_date }) {
    this._sku = {
      id: String,
      standard: String,
      price: Number,
      photo: String,
      created_date: String,
      updated_date: String
    };
    this._sku.id = id;
    this._sku.standard = standard;
    this._sku.price = price;
    this._sku.photo = photo;
    this._sku.created_date = created_date;
    this._sku.updated_date = updated_date;
  }

  getData() {
    let sku = this._sku;
    let sku_with_no_null = Object.assign({}, this._sku);

    let properties = Object.getOwnPropertyNames(this._sku);
    for (let property of properties) {
      if (Reflect.get(this._sku, property) == null)
        Reflect.deleteProperty(sku_with_no_null, property);
    }

    return { sku, sku_with_no_null };
  }

  get id() {
    return this._sku.id == undefined ? null : this._sku.id;
  }

  set id(value) {
    this._sku.id = value;
  }

  get price() {
    return this._sku.price == undefined ? null : this._sku.price;
  }

  set price(value) {
    this._sku.price = value;
  }

  get photo() {
    return this._sku.photo == undefined ? null : this._sku.photo;
  }

  set photo(value) {
    this._sku.photo = value;
  }

  get created_date() {
    return this._sku.created_date == undefined
      ? null
      : this._sku.created_date;
  }

  set created_date(value) {
    this._sku.created_date = value;
  }

  get updated_date() {
    return this._sku.updated_date == undefined
      ? null
      : this._sku.updated_date;
  }

  set updated_date(value) {
    this._sku.updated_date = value;
  }
}

module.exports = Sku;
