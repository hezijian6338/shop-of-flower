class Cart {
  constructor({
    id,
    product_id,
    name,
    sku_id,
    standard,
    price,
    photo,
    created_date,
    updated_date
  }) {
    this._cart = {
      id: String,
      product_id: String,
      name: String,
      sku_id: String,
      standard: String,
      price: Number,
      photo: String,
      created_date: String,
      updated_date: String
    };
    this._cart.id = id;
    this._cart.product_id = product_id;
    this._cart.name = name;
    this._cart.sku_id = sku_id;
    this._cart.standard = standard;
    this._cart.price = price;
    this._cart.photo = photo;
    this._cart.created_date = created_date;
    this._cart.updated_date = updated_date;
  }

  getData() {
    let cart = this._cart;

    let cart_with_no_null = Object.assign({}, this._cart);

    let properties = Object.getOwnPropertyNames(this._cart);

    for (let property of properties) {
      if (Reflect.get(this._cart, property) == null)
        Reflect.deleteProperty(cart_with_no_null, property);
    }

    return { cart, cart_with_no_null };
  }

  get id() {
    return this._cart.id == undefined ? null : this._cart.id;
  }

  set id(value) {
    this._cart.id = value;
  }

  get product_id() {
    return this._cart.product_id == undefined ? null : this._cart.product_id;
  }

  set product_id(value) {
    this._cart.product_id = value;
  }

  get name() {
    return this._cart.name == undefined ? null : this._cart.name;
  }

  set name(value) {
    this._cart.name = value;
  }

  get sku_id() {
    return this._cart.sku_id == undefined ? null : this._cart.sku_id;
  }

  set sku_id(value) {
    this._cart.sku_id = value;
  }

  get standard() {
    return this._cart.standard == undefined ? null : this._cart.standard;
  }

  set standard(value) {
    this._cart.standard = value;
  }

  get price() {
    return this._cart.price == undefined ? null : this._cart.price;
  }

  set price(value) {
    this._cart.price = value;
  }

  get photo() {
    return this._cart.photo == undefined ? null : this._cart.photo;
  }

  set photo(value) {
    this._cart.photo = value;
  }

  get created_date() {
    return this._cart.created_date == undefined
      ? null
      : this._cart.created_date;
  }

  set created_date(value) {
    this._cart.created_date = value;
  }

  get updated_date() {
    return this._cart.updated_date == undefined
      ? null
      : this._cart.updated_date;
  }

  set updated_date(value) {
    this._cart.updated_date = value;
  }
}

module.exports = Cart;
