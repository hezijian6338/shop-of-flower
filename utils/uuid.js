const uuid = require("uuid");

class Uuid {
  constructor() {
    let id = uuid.v4();
    this.uuid = '';
    for (let item of id.split("-")) {
      this.uuid = this.uuid + item;
    }
    return this.uuid;
  }
}

module.exports = Uuid;
