class User {
  constructor({
    id,
    phone,
    password,
    name,
    role,
    order_ids,
    cart_ids,
    created_date,
    updated_date,
  }) {
    this._user = {
      id: String,
      phone: String,
      password: String,
      name: String,
      role: Number,
      order_ids: String,
      cart_ids: String,
      created_date: String,
      updated_date: String,
    };
    this._user.id = id;
    this._user.phone = phone;
    this._user.password = password;
    this._user.name = name;
    this._user.role = role;
    this._user.order_ids = order_ids;
    this._user.cart_ids = cart_ids;
    this._user.created_date = created_date;
    this._user.updated_date = updated_date;
  }

  getData() {
    const user = this._user;
    const user_with_no_null = { ...this._user };

    const properties = Object.getOwnPropertyNames(this._user);
    for (const property of properties) {
      if (Reflect.get(this._user, property) == null) { Reflect.deleteProperty(user_with_no_null, property); }
    }

    return { user, user_with_no_null };
  }

  get id() {
    return this._user.id == undefined ? null : this._user.id;
  }

  set id(value) {
    this._user.id = value;
  }

  get password() {
    return this._user.password == undefined ? null : this._user.password;
  }

  set password(value) {
    this._user.password = value;
  }

  get phone() {
    return this._user.phone == undefined ? null : this._user.phone;
  }

  set phone(value) {
    this._user.phone = value;
  }

  get role() {
    return this._user.role == undefined ? null : this._user.role;
  }

  set role(value) {
    this._user.role = value;
  }

  get order_ids() {
    return this._user.order_ids == undefined ? null : this._user.order_ids;
  }

  set order_ids(value) {
    this._user.order_ids = value;
  }

  get cart_ids() {
    return this._user.cart_ids == undefined ? null : this._user.cart_ids;
  }

  set cart_ids(value) {
    this._user.cart_ids = value;
  }

  get created_date() {
    return this._user.created_date == undefined
      ? null
      : this._user.created_date;
  }

  set created_date(value) {
    this._user.created_date = value;
  }

  get updated_date() {
    return this._user.updated_date == undefined
      ? null
      : this._user.updated_date;
  }

  set updated_date(value) {
    this._user.updated_date = value;
  }
}

module.exports = User;
