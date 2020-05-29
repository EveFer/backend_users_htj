const { Router } = require('express')

const users = require('../usesCase/users')
const { auth, permission, isOwnerAccount } = require('../middlewares')

const ROUTER = Router()

ROUTER.post('/', async (req, res) => {
  try {
    const { body } = req
    const userCreated = await users.signUp(body)
    res.json({
      success: true,
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.get('/', auth, permission('administrator'), async (req, res) => {
  try {
    const { id: userCurrent } = req.user
    const allUsers = await users.getAllUsers(userCurrent)
    res.json({
      success: true,
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.get('/admins', auth, permission('administrator'), async (req, res) => {
  try {
    const { id: userCurrent } = req.user
    const allUsersAdmins = await users.getAllAdmins(userCurrent)
    res.json({
      success: true,
      data: {
        users: allUsersAdmins
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.get('/:id', auth, permission('administrator', 'user'), async (req, res) => {
  try {
    const { id } = req.params
    const user = await users.getById(id)
    res.json({
      success: true,
      data: { user }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: 'Not found User'
    })
  }
})

ROUTER.delete('/:id', auth, permission('administrator', 'user'), isOwnerAccount, async (req, res) => {
  try {
    const { id } = req.params
    await users.deleteById(id)
    res.json({
      success: true,
      message: 'User deleted successfully'
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.patch('/:id', auth, permission('administrator', 'user'), isOwnerAccount, async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const userUpdated = await users.updateById(id, body)
    res.json({
      success: true,
      data: {
        user: userUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.post('/:id/subscription', auth, permission('administrator'), async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const subscriptionCreated = await users.addSubscription(id, body)
    res.json({
      success: true,
      data: {
        user: subscriptionCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

ROUTER.patch('/:idUser/subscription', auth, permission('administrator'), async (req, res) => {
  try {
    const { idUser } = req.params
    const { body } = req

    const subscriptionUpdated = await users.updateSubscription(idUser, body)
    res.json({
      success: true,
      data: {
        user: subscriptionUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = ROUTER
