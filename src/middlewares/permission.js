
function permission (...allowedRole) {
  const isAllowed = role => allowedRole.indexOf(role) > -1
  return (req, res, next) => {
    const { role } = req.user
    if (isAllowed(role)) {
      next()
    } else {
      res.status(403)
      res.json({
        success: false,
        message: 'Forbidden, This user is not permitted to access'
      })
    }
  }
}

module.exports = permission
