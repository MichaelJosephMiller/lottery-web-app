/* eslint-disable no-console */
const scraper = require('./scraper')

scraper.scrapeMegaMillions
  .then(res => console.log(res))
  .catch(err => console.log(err))
