const crypto = require('crypto')

class Crypto {
  constructor(password) {
    this.hash = crypto
      .createHmac('sha256', password)
      .update('koa')
      .digest('hex')
    // console.log(this.hash);
    return this.hash
  }
}

module.exports = Crypto
