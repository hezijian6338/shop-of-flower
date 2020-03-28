class Order {
  constructor({
    id,
    product_id,
    name,
    sku_id,
    standard,
    price,
    photo,
    state,
    created_date,
    updated_date,
  }) {
    this._order = {
      id: String,
      product_id: String,
      name: String,
      sku_id: String,
      standard: String,
      price: Number,
      photo: String,
      state: Number,
      created_date: String,
      updated_date: String,
    };
    this._order.id = id;
    this._order.product_id = product_id;
    this._order.name = name;
    this._order.sku_id = sku_id;
    this._order.standard = standard;
    this._order.price = price;
    this._order.photo = photo;
    this._order.state = state;
    this._order.created_date = created_date;
    this._order.updated_date = updated_date;
  }

  getData() {
    const order = this._order;
    const order_with_no_null = { ...this._order };

    const properties = Object.getOwnPropertyNames(this._order);
    for (const property of properties) {
      if (Reflect.get(this._order, property) == null) { Reflect.deleteProperty(order_with_no_null, property); }
    }

    return { order, order_with_no_null };
  }

  get id() {
    return this._order.id == undefined ? null : this._order.id;
  }

  set id(value) {
    this._order.id = value;
  }

  get product_id() {
    return this._order.product_id == undefined ? null : this._order.product_id;
  }

  set product_id(value) {
    this._order.product_id = value;
  }

  get name() {
    return this._order.name == undefined ? null : this._order.name;
  }

  set name(value) {
    this._order.name = value;
  }

  get sku_id() {
    return this._order.sku_id == undefined ? null : this._order.sku_id;
  }

  set sku_id(value) {
    this._order.sku_id = this._order.sku_id;
  }

  get standard() {
    return this._order.standard == undefined ? null : this._order.standard;
  }

  set standard(value) {
    this._order.standard = value;
  }

  get price() {
    return this._order.price == undefined ? null : this._order.price;
  }

  set price(value) {
    this._order.price = value;
  }

  get photo() {
    return this._order.photo == undefined ? null : this._order.photo;
  }

  set photo(value) {
    this._order.photo = value;
  }

  get state() {
    return this._order.state == undefined ? null : this._order.state;
  }

  set state(value) {
    this._order.state = value;
  }

  get created_date() {
    return this._order.created_date == undefined
      ? null
      : this._order.created_date;
  }

  set created_date(value) {
    this._order.created_date = value;
  }

  get updated_date() {
    return this._order.updated_date == undefined
      ? null
      : this._order.updated_date;
  }

  set updated_date(value) {
    this._order.updated_date = value;
  }
}

module.exports = Order;
