var express = require('express')
var path = require('path')
var logger = require('morgan')

var indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
var usersRouter = require('./routes/users')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/LotteryAnalyserdb', { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongoose connected to LotteryAnalyserdb')
})

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/users', usersRouter)

module.exports = app
