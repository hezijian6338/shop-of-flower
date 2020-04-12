// 实体类这里采用 ES6的类语法糖进行编写, 这样会更加贴近面向对象编程, 同时更加容易理解
class Product {
  constructor({
    id,
    product_id: productId,
    name,
    brief,
    content,
    price,
    sku_ids: skuIds,
    photo,
    created_date: createdDate,
    updated_date: updatedDate,
  }) {
    this.product = {
      id: String,
      product_id: String,
      name: String,
      brief: String,
      content: String,
      price: Number,
      sku_ids: String,
      photo: String,
      created_date: Number,
      updated_date: Number,
    }
    this.product.id = id
    this.product.product_id = productId
    this.product.name = name
    this.product.brief = brief
    this.product.content = content
    this.product.price = price
    this.product.sku_ids = skuIds
    this.product.photo = photo
    this.product.created_date = createdDate
    this.product.updated_date = updatedDate
  }

  getData() {
    const { product } = this
    // 输出对象中拥有的自身属性
    // console.log(Object.getOwnPropertyNames(product));

    // 深层次复制
    const productWithNoNull = { ...this.product }
    // let product_with_no_null = { ...product };

    // 浅层次复制, 只复制了引用地址, 两对象的值会联动修改
    // let product_with_no_null = product;

    // 自身属性复制一个数组中
    const propertys = Object.getOwnPropertyNames(product)

    // 遍历数组内容, 对新复制的数组中为 null值得进行剔除... 返回一个无空值的结果对象
    propertys.forEach((property) => {
      if (Reflect.get(product, property) == null) {
        Reflect.deleteProperty(productWithNoNull, property)
      }
    })

    // console.log(product_with_no_null);
    // console.log(product);

    return { product, productWithNoNull }
  }

  // 以下是配置对象实例属性的 getter/setter方法

  get id() {
    return this.product.id === undefined ? null : this.product.id
  }

  set id(value) {
    this.product.id = value
  }

  get productId() {
    return this.product.product_id === undefined ? null : this.product.product_id
  }

  set productId(value) {
    this.product.product_id = value
    // console.log(`product_id:${value}`);
  }

  get name() {
    return this.product.name === undefined ? null : this.product.name
  }

  set name(value) {
    this.product.name = value
  }

  get brief() {
    return this.product.brief === undefined ? null : this.product.brief
  }

  set brief(value) {
    this.product.brief = value
  }

  get content() {
    return this.product.content === undefined ? null : this.product.content
  }

  set content(value) {
    this.product.content = value
  }

  get price() {
    return this.product.price === undefined ? null : this.product.price
  }

  set price(value) {
    this.product.price = value
  }

  get skuIds() {
    return this.product.sku_ids === undefined ? null : this.product.sku_ids
  }

  set skuIds(value) {
    this.product.sku_ids = value
  }

  get photo() {
    return this.product.photo === undefined ? null : this.product.photo
  }

  set photo(value) {
    this.product.photo = value
  }

  get createdDate() {
    return this.product.created_date === undefined ? null : this.product.created_date
  }

  set createdDate(value) {
    this.product.created_date = value
  }

  get updatedDate() {
    return this.product.updated_date === undefined ? null : this.product.updated_date
  }

  set updatedDate(value) {
    this.product.updated_date = value
  }
}

module.exports = Product
