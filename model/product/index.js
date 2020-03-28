// 实体类这里采用 ES6的类语法糖进行编写, 这样会更加贴近面向对象编程, 同时更加容易理解
class Product {
  constructor({
    id,
    product_id,
    name,
    brief,
    content,
    sku_ids,
    photo,
    created_date,
    updated_date,
  }) {
    this._id = id;
    this._product_id = product_id;
    this._name = name;
    this._brief = brief;
    this._content = content;
    this._sku_ids = sku_ids;
    this._photo = photo;
    this._created_date = created_date;
    this._updated_date = updated_date;
  }

  getData() {
    const product = {
      id: this.id,
      product_id: this.product_id,
      name: this.name,
      brief: this.brief,
      content: this.content,
      sku_ids: this.sku_ids,
      photo: this.photo,
      created_date: String,
      updated_date: String,
    };

    // 输出对象中拥有的自身属性
    // console.log(Object.getOwnPropertyNames(product));

    // 深层次复制
    const product_with_no_null = { ...product };
    // let product_with_no_null = { ...product };

    // 浅层次复制, 只复制了引用地址, 两对象的值会联动修改
    // let product_with_no_null = product;

    // 自身属性复制一个数组中
    const propertys = Object.getOwnPropertyNames(product);

    // 遍历数组内容, 对新复制的数组中为 null值得进行剔除... 返回一个无空值的结果对象
    for (const property of propertys) {
      if (Reflect.get(product, property) == null) {
        Reflect.deleteProperty(product_with_no_null, property);
      }
    }

    // console.log(product_with_no_null);
    // console.log(product);

    return { product, product_with_no_null };
  }

  // 以下是配置对象实例属性的 getter/setter方法

  get id() {
    return this._id == undefined ? null : this._id;
  }

  set id(value) {
    this._id = value;
  }

  get product_id() {
    return this._product_id == undefined ? null : this._product_id;
  }

  set product_id(value) {
    this._product_id = value;
    console.log(`product_id:${value}`);
  }

  get name() {
    return this._name == undefined ? null : this._name;
  }

  set name(value) {
    this._name = value;
  }

  get brief() {
    return this._brief == undefined ? null : this._brief;
  }

  set brief(value) {
    this._brief = value;
  }

  get content() {
    return this._content == undefined ? null : this._content;
  }

  set content(value) {
    this._content = value;
  }

  get sku_ids() {
    return this._sku_ids == undefined ? null : this._sku_ids;
  }

  set sku_ids(value) {
    this._sku_ids = value;
  }

  get photo() {
    return this._photo == undefined ? null : this._photo;
  }

  set photo(value) {
    this._photo = value;
  }

  get created_date() {
    return this._created_date == undefined ? null : this._created_date;
  }

  set created_date(value) {
    this._created_date = value;
  }

  get updated_date() {
    return this._updated_date == undefined ? null : this._updated_date;
  }

  set updated_date(value) {
    this._updated_date = value;
  }
}

module.exports = Product;
