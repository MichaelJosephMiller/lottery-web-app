/* eslint-disable no-console */
const express = require('express')
const routes = require('./routes/')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
// const cron = require('node-cron')
// const scraper = require('./modules/scraper')

mongoose.connect('mongodb://localhost/LotteryWebAppdb', { useNewUrlParser: true })
mongoose.set('useFindAndModify', false)
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongoose connected to LotteryWebAppdb')
})

// cron.schedule('0 3,15 * * *', () => { scraper.megaMillions.website.scrape() }, { scheduled: true })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/games', routes.games)
app.use('/mega_millions/', routes.megaMillions)

// Uncomment to reload Mega Millions history on next restart
// scraper.megaMillions.history.get()

module.exports = app
