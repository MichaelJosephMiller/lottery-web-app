/* eslint-disable no-console */
'use strict'
const Nightmare = require('nightmare')
const nightmare = Nightmare({
  show: false
})

module.exports.scrapeMegaMillions = new Promise((resolve, reject) => {
  nightmare
    .goto('https://www.megamillions.com')
    .wait(3000)
    .evaluate(() => {
      let obj = {}
      obj.lastDrawing = {}
      obj.lastDrawing.big_winners = {}
      obj.lastDrawing.date = document.querySelector('#lastestDate').innerText.trim()
      obj.lastDrawing.wb1 = document.querySelector('.winNum1').innerText.trim()
      obj.lastDrawing.wb2 = document.querySelector('.winNum2').innerText.trim()
      obj.lastDrawing.wb3 = document.querySelector('.winNum3').innerText.trim()
      obj.lastDrawing.wb4 = document.querySelector('.winNum4').innerText.trim()
      obj.lastDrawing.wb5 = document.querySelector('.winNum5').innerText.trim()
      obj.lastDrawing.megaBall = document.querySelector('.winNumMB').innerText.trim()
      obj.lastDrawing.megaplier = document.querySelector('.winNumMP').innerText.trim()
      obj.lastDrawing.big_winners.match_type = document.querySelector('#bw50 h4').innerText.trim()
      obj.lastDrawing.big_winners.states = document.querySelector('.bwState').innerText.trim()
      obj.estJackpot = document.querySelector('span.nextEstVal.js_estJackpot').innerText.trim()
      obj.cashOpt = document.querySelector('span.cashOpt').innerText.trim()
      obj.nextDrawDate = document.querySelector('span.nextDrawDate').innerText.trim()
      return obj
    })
    .then(obj => {
      nightmare
        .goto('https://www.megamillions.com/Where-to-Play.aspx')
        .wait(2000)
        .evaluate(obj => {
          let optionsEls = document.querySelectorAll('.select-options ul li')
          let participating_states = []
          optionsEls.forEach((el) => {
            participating_states.push(el.querySelector('span').innerText.trim())
          })
          obj.participating_states = participating_states
          return obj
        }, obj)
        .end()
        .then(obj => resolve(obj))
        .catch(err => reject(err))
    })
    .catch(err => reject(err))
})
