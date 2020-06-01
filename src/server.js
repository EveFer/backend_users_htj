const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

// settings
app.set('port', process.env.PORT || 3003)

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
app.get('', (req, res) => {
  res.json({
    description: 'Api',
    version: '1.0.0'
  })
})

// routes
app.use('/users', userRouter)
app.use('/auth', authRouter)

module.exports = app
