const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const User = require('../models/users')

/**
 *
 * @param {Object} userData - User data
*/
async function signUp (userData) {
  const { email, password } = userData
  if (!email) throw new Error('Email address is required')
  if (!password) throw new Error('Password is required')
  if (password.length < 8) throw new Error('Password must be at greater than 8 characters')

  const userAlreadyExists = await User.findOne({ email: email })

  if (userAlreadyExists) throw new Error('Email is already in use')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...userData, password: hash })
}

/**
 *
 * @param {String} email - The email address
 * @param {String} password - The password
 */
async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid Credentials')
  const { _id, role, password: hash } = user
  const isPasswordCorrect = await bcrypt.compare(password, hash)
  if (!isPasswordCorrect) throw new Error('Invalid Credentials')

  return jwt.sign({ id: _id, role })
}

/**
 *
 * @param {String} id - id of user
 */
function getById (id) {
  return User.findById(id).select('name lastName email role carbonFootprint subscription')
}

function getAllUsers (userCurrent) {
  return User.find({ _id: { $ne: userCurrent }, role: { $ne: 'administrator' } }).select('name lastName email role carbonFootprint subscription')
}

function getAllAdmins (userCurrent) {
  return User.find({ _id: { $ne: userCurrent }, role: { $ne: 'user' } }).select('name lastName email role')
}

/**
 *
 * @param {String} id - id of user to delete
 */
function deleteById (id) {
  return User.findByIdAndRemove(id)
}

/**
 *
 * @param {String} id - id of user to update
 * @param {Object} newData - new data to update
 */
function updateById (id, newData) {
  return User.findByIdAndUpdate(id, newData, { new: true })
}

/**
 *
 * @param {String} idUser - id of user
 * @param {Object} newSubscriptionData - new subscription data
 */
async function addSubscription (idUser, SubscriptionData) {
  const userAlreadyExists = await User.findById(idUser)

  if (!userAlreadyExists) throw new Error('This User does not exist')

  if (userAlreadyExists.subscription) throw new Error('This User already has a subscription')

  userAlreadyExists.subscription = SubscriptionData

  return userAlreadyExists.save()
}

async function updateSubscription (idUser, newSubscriptionData) {
  const userAlreadyExists = await User.findById(idUser)

  if (!userAlreadyExists) throw new Error('This User does not exist')

  userAlreadyExists.subscription = newSubscriptionData

  return userAlreadyExists.save()
}

module.exports = {
  signUp,
  getById,
  getAllUsers,
  getAllAdmins,
  deleteById,
  updateById,
  addSubscription,
  updateSubscription,
  login
}
