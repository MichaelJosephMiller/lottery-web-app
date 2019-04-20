const express = require('express')
const logger = require('morgan')
const apiRouter = require('./routes/api')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()

mongoose.connect('mongodb://localhost/LotteryAnalyserdb', { useNewUrlParser: true })
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongoose connected to LotteryAnalyserdb')
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', apiRouter)

module.exports = app
