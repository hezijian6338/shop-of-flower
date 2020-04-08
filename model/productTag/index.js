class ProductTag {
  constructor({
    id, tag_name: tagName, product_id: productId, created_date: createdDate,
    updated_date: updatedDate,
  }) {
    this.productTag = {
      id: String,
      tag_name: String,
      product_id: String,
      created_date: Number,
      updated_date: Number,
    }
    this.productTag.id = id
    this.productTag.tag_name = tagName
    this.productTag.product_id = productId
    this.productTag.created_date = createdDate
    this.productTag.updated_date = updatedDate
  }

  getData() {
    const { productTag } = this

    const productTagWithNoNull = { ...this.productTag }

    const properties = Object.getOwnPropertyNames(productTag)

    properties.forEach((property) => {
      if (Reflect.get(productTag, property) == null) {
        Reflect.deleteProperty(productTagWithNoNull, property)
      }
    })

    return { productTag, productTagWithNoNull }
  }


  get id() {
    return this.productTag.id === undefined ? null : this.productTag.id
  }

  set id(value) {
    this.productTag.id = value
  }

  get productId() {
    return this.productTag.product_id === undefined ? null : this.productTag.product_id
  }

  set productId(value) {
    this.productTag.product_id = value
  }

  get tagName() {
    return this.productTag.tag_name === undefined ? null : this.productTag.tag_name
  }

  set tagName(value) {
    this.productTag.tag_name = value
  }

  get createdDate() {
    return this.productTag.created_date === undefined ? null : this.productTag.created_date
  }

  set createdDate(value) {
    this.productTag.created_date = value
  }

  get updatedDate() {
    return this.productTag.updated_date === undefined ? null : this.productTag.updated_date
  }

  set updatedDate(value) {
    this.productTag.updated_date = value
  }
}

module.exports = ProductTag
