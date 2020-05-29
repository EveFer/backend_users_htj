const User = require('../models/users')

function isOwnerAccount (req, res, next) {
  const { id } = req.params

  const user = User.findOne({ id })

  if (!user) throw new Error('User not found')

  const { id: userCurrent } = req.user

  if (userCurrent === user._id) {
    next()
  } else {
    res.status(403)
    res.json({
      success: false,
      message: 'Forbidden, This user is not authorized'
    })
  }
}

module.exports = isOwnerAccount
