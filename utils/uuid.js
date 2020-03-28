const uuid = require('uuid')

class Uuid {
  constructor() {
    const id = uuid.v4()
    this.uuid = ''
    id.split('-').forEach((item) => {
      this.uuid += item
    })
    return this.uuid
  }
}

module.exports = Uuid
