const User = require('../models/users')

function isOwnerAccount (req, res, next) {
  const { id } = req.params
  console.log(id)

  const user = User.findOne({ id })

  if (!user) throw new Error('User not found')

  const { id: userCurrent } = req.user
  console.log(userCurrent)
  if (userCurrent === id) {
    next()
  } else {
    res.status(403)
    res.json({
      success: false,
      data: {
        message: 'Forbidden, This user is not authorized'
      }
    })
  }
}

module.exports = isOwnerAccount
