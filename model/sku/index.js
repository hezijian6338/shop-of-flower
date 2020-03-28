class Sku {
  constructor({
    id, standard, price, photo, createdDate, updatedDate,
  }) {
    this.sku = {
      id: String,
      standard: String,
      price: Number,
      photo: String,
      created_date: String,
      updated_date: String,
    }
    this.sku.id = id
    this.sku.standard = standard
    this.sku.price = price
    this.sku.photo = photo
    this.sku.created_date = createdDate
    this.sku.updated_date = updatedDate
  }

  getData() {
    const { sku } = this
    const skuWithNoNull = { ...this.sku }

    const properties = Object.getOwnPropertyNames(this.sku)

    properties.forEach((property) => {
      if (Reflect.get(this.sku, property) == null) {
        Reflect.deleteProperty(skuWithNoNull, property)
      }
    })

    return { sku, skuWithNoNull }
  }

  get id() {
    return this.sku.id === undefined ? null : this.sku.id
  }

  set id(value) {
    this.sku.id = value
  }

  get price() {
    return this.sku.price === undefined ? null : this.sku.price
  }

  set price(value) {
    this.sku.price = value
  }

  get photo() {
    return this.sku.photo === undefined ? null : this.sku.photo
  }

  set photo(value) {
    this.sku.photo = value
  }

  get createdDate() {
    return this.sku.created_date === undefined
      ? null
      : this.sku.created_date
  }

  set createdDate(value) {
    this.sku.created_date = value
  }

  get updatedDate() {
    return this.sku.updated_date === undefined
      ? null
      : this.sku.updated_date
  }

  set updatedDate(value) {
    this.sku.updated_date = value
  }
}

module.exports = Sku
