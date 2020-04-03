class Order {
  constructor({
    id,
    productId,
    name,
    skuId,
    standard,
    price,
    photo,
    state,
    createdDate,
    updatedDate,
  }) {
    this.order = {
      id: String,
      product_id: String,
      name: String,
      sku_id: String,
      standard: String,
      price: Number,
      photo: String,
      state: Number,
      created_date: Number,
      updated_date: Number,
    }
    this.order.id = id
    this.order.product_id = productId
    this.order.name = name
    this.order.sku_id = skuId
    this.order.standard = standard
    this.order.price = price
    this.order.photo = photo
    this.order.state = state
    this.order.created_date = createdDate
    this.order.updated_date = updatedDate
  }

  getData() {
    const { order } = this
    const orderWithNoNull = { ...this.order }

    const properties = Object.getOwnPropertyNames(this.order)

    properties.forEach((property) => {
      if (Reflect.get(this.order, property) == null) {
        Reflect.deleteProperty(orderWithNoNull, property)
      }
    })

    return { order, orderWithNoNull }
  }

  get id() {
    return this.order.id === undefined ? null : this.order.id
  }

  set id(value) {
    this.order.id = value
  }

  get productId() {
    return this.order.product_id === undefined ? null : this.order.product_id
  }

  set productId(value) {
    this.order.product_id = value
  }

  get name() {
    return this.order.name === undefined ? null : this.order.name
  }

  set name(value) {
    this.order.name = value
  }

  get skuId() {
    return this.order.sku_id === undefined ? null : this.order.sku_id
  }

  set skuId(value) {
    this.order.sku_id = this.order.skuId
  }

  get standard() {
    return this.order.standard === undefined ? null : this.order.standard
  }

  set standard(value) {
    this.order.standard = value
  }

  get price() {
    return this.order.price === undefined ? null : this.order.price
  }

  set price(value) {
    this.order.price = value
  }

  get photo() {
    return this.order.photo === undefined ? null : this.order.photo
  }

  set photo(value) {
    this.order.photo = value
  }

  get state() {
    return this.order.state === undefined ? null : this.order.state
  }

  set state(value) {
    this.order.state = value
  }

  get createdDate() {
    return this.order.created_date === undefined
      ? null
      : this.order.created_date
  }

  set createdDate(value) {
    this.order.created_date = value
  }

  get updatedDate() {
    return this.order.updated_date === undefined
      ? null
      : this.order.updated_date
  }

  set updatedDate(value) {
    this.order.updated_date = value
  }
}

module.exports = Order
