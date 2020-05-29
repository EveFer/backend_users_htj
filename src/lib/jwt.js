const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY || '82738ei2dh732dn39892ndj2nd293239283dn'

function sign (payload = {}) {
  return jwt.sign(payload, SECRET_KEY)
}

function verify (token = '') {
  return jwt.verify(token, SECRET_KEY)
}

module.exports = {
  ...jwt,
  sign,
  verify
}
