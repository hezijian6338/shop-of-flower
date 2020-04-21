const jwt = require('jsonwebtoken')

const jwtSecret = 'jwtSecret'

module.exports = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, jwtSecret, (error, decoded) => {
    // eslint-disable-next-line no-unused-expressions
    error ? reject(error) : resolve(decoded)
  })
})
