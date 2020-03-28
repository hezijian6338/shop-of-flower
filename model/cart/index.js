class Cart {
  constructor({
    id,
    productId,
    name,
    skuId,
    standard,
    price,
    photo,
    createdDate,
    updatedDate,
  }) {
    this.cart = {
      id: String,
      product_id: String,
      name: String,
      sku_id: String,
      standard: String,
      price: Number,
      photo: String,
      created_date: String,
      updated_date: String,
    };
    this.cart.id = id;
    this.cart.product_id = productId;
    this.cart.name = name;
    this.cart.sku_id = skuId;
    this.cart.standard = standard;
    this.cart.price = price;
    this.cart.photo = photo;
    this.cart.created_date = createdDate;
    this.cart.updated_date = updatedDate;
  }

  getData() {
    const { cart } = this.cart;

    const cartWithNoNull = { ...this.cart };

    const properties = Object.getOwnPropertyNames(this.cart);

    properties.forEach((property) => {
      if (Reflect.get(this.cart, property) == null) {
        Reflect.deleteProperty(cartWithNoNull, property);
      }
    });

    return { cart, cartWithNoNull };
  }

  get id() {
    return this.cart.id === undefined ? null : this.cart.id;
  }

  set id(value) {
    this.cart.id = value;
  }

  get productId() {
    return this.cart.product_id === undefined ? null : this.cart.product_id;
  }

  set productId(value) {
    this.cart.product_id = value;
  }

  get name() {
    return this.cart.name === undefined ? null : this.cart.name;
  }

  set name(value) {
    this.cart.name = value;
  }

  get skuId() {
    return this.cart.sku_id === undefined ? null : this.cart.sku_id;
  }

  set skuId(value) {
    this.cart.sku_id = value;
  }

  get standard() {
    return this.cart.standard === undefined ? null : this.cart.standard;
  }

  set standard(value) {
    this.cart.standard = value;
  }

  get price() {
    return this.cart.price === undefined ? null : this.cart.price;
  }

  set price(value) {
    this.cart.price = value;
  }

  get photo() {
    return this.cart.photo === undefined ? null : this.cart.photo;
  }

  set photo(value) {
    this.cart.photo = value;
  }

  get createdDate() {
    return this.cart.created_date === undefined
      ? null
      : this.cart.created_date;
  }

  set createdDate(value) {
    this.cart.created_date = value;
  }

  get updatedDate() {
    return this.cart.updated_date === undefined
      ? null
      : this.cart.updated_date;
  }

  set updatedDate(value) {
    this.cart.updated_date = value;
  }
}

module.exports = Cart;
