class Response {
  constructor() {
    const data = {
      code: Number,
      data: Object,
    };
    this.data = data;
  }

  set SUCCESS(value) {
    if (value > 199 < 300) {
      this.data.code = value;
    }
  }

  set FAIL(value) {
    if (value > 499 < 600) {
      this.data.code = value;
    }
  }

  set DATA(value) {
    this.data.data = value;
  }

  getData() {
    if (this.data.data == null) {
      this.data.data = {};
    }

    return this.data;
  }
}

module.exports = Response;
