class User {
  constructor({
    id,
    phone,
    password,
    name,
    role,
    orderIds,
    cartIds,
    createdDate,
    updatedDate,
  }) {
    this.user = {
      id: String,
      phone: String,
      password: String,
      name: String,
      role: Number,
      order_ids: String,
      cart_ids: String,
      created_date: Number,
      updated_date: Number,
    }
    this.user.id = id
    this.user.phone = phone
    this.user.password = password
    this.user.name = name
    this.user.role = role
    this.user.order_ids = orderIds
    this.user.cart_ids = cartIds
    this.user.created_date = createdDate
    this.user.updated_date = updatedDate
  }

  getData() {
    const { user } = this
    const userWithNoNull = { ...this.user }

    const properties = Object.getOwnPropertyNames(this.user)

    properties.forEach((property) => {
      if (Reflect.get(this.user, property) == null) {
        Reflect.deleteProperty(userWithNoNull, property)
      }
    })

    return { user, userWithNoNull }
  }

  get id() {
    return this.user.id === undefined ? null : this.user.id
  }

  set id(value) {
    this.user.id = value
  }

  get password() {
    return this.user.password === undefined ? null : this.user.password
  }

  set password(value) {
    this.user.password = value
  }

  get phone() {
    return this.user.phone === undefined ? null : this.user.phone
  }

  set phone(value) {
    this.user.phone = value
  }

  get role() {
    return this.user.role === undefined ? null : this.user.role
  }

  set role(value) {
    this.user.role = value
  }

  get orderIds() {
    return this.user.order_ids === undefined ? null : this.user.order_ids
  }

  set orderIds(value) {
    this.user.order_ids = value
  }

  get cartIds() {
    return this.user.cart_ids === undefined ? null : this.user.cart_ids
  }

  set cartIds(value) {
    this.user.cart_ids = value
  }

  get createdDate() {
    return this.user.created_date === undefined
      ? null
      : this.user.created_date
  }

  set createdDate(value) {
    this.user.created_date = value
  }

  get updatedDate() {
    return this.user.updated_date === undefined
      ? null
      : this.user.updated_date
  }

  set updatedDate(value) {
    this.user.updated_date = value
  }
}

module.exports = User
