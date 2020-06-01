const { Schema, model } = require('mongoose')

const subscriptionSchema = require('./subscriptions')

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  lastName: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    require: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    require: true,
    minLength: 8
  },
  role: {
    type: String,
    require: true,
    enum: ['administrator', 'user'],
    default: 'user'
  },
  carbonFootprint: {
    type: Object,
    require: false
  },
  subscription: subscriptionSchema
}, {
  timestamps: true
})

module.exports = model('User', userSchema)
