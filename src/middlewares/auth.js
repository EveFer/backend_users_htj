const jwt = require('../lib/jwt')

function auth (req, res, next) {
  const { authorization: token } = req.headers
  try {
    const tokenDecode = jwt.verify(token)
    const { id, role } = tokenDecode
    req.user = { id, role }
    next()
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
