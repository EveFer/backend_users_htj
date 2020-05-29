const { Schema } = require('mongoose')

const subscriptionSchema = new Schema({
  plan: {
    type: String,
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
  dateRenovation: {
    type: Date
  },
  receipts: {
    type: [Object],
    require: false
  }
}, {
  timestamps: true
})

module.exports = subscriptionSchema
