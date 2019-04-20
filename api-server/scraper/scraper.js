const Nightmare = require('nightmare')
const nightmare = Nightmare({
  show: true
})

// module.exports.scrapeAll = new Promise((resolve, reject) => {
//   return () => {
//     let data = {}
//     data.megaMillions = exports.scrapeMegaMillions()
//     data.powerball = {
//       test: 'test'
//     }

//     return data
//   }
// })

nightmare
  .goto('https://www.megamillions.com')
  .wait(2000)
  .evaluate(() => {
    let obj = {}
    obj.estJackpot = document.querySelector('span.nextEstVal.js_estJackpot').innerText
    obj.cashOpt = document.querySelector('span.cashOpt').innerText
    obj.nextDrawDate = document.querySelector('span.nextDrawDate').innerText + ' @ 11 pm ET'
    return obj
  })
  .end()
  .then(obj => console.log(obj))
  .catch(err => console.log(err))
