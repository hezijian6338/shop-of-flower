class Response {
  constructor() {
    let data = {
      code: Number,
      data: Object
    };
    this._data = data;
  }

  set SUCCESS(value) {
    if (199 < value < 300) {
      this._data.code = value;
    }
  }

  set FAIL(value) {
    if (499 < value < 600) {
      this._data.code = value;
    }
  }

  set DATA(value) {
    this._data.data = value;
  }

  getData() {
    if (this._data.data == null) {
      this._data.data = {};
    }
    
    return this._data;
  }
}

module.exports = Response;
