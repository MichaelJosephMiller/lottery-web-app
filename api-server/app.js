/* eslint-disable no-console */
const express = require('express')
const logger = require('morgan')
const routes = require('./routes/')
const mongoose = require('mongoose')
// const cron = require('node-cron')
const db = mongoose.connection
const app = express()

mongoose.connect('mongodb://localhost/LotteryAnalyserdb', { useNewUrlParser: true })
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongoose connected to LotteryAnalyserdb')
})

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute')
//   console.log(Date.now())
// })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/games', routes.games)
app.use('/mega_millions/', routes.megaMillions)

module.exports = app
