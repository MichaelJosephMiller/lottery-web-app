'use strict'
const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  date: { type: Date, required: true },
  wb1: { type: Number, required: true },
  wb2: { type: Number, required: true },
  wb3: { type: Number, required: true },
  wb4: { type: Number, required: true },
  wb5: { type: Number, required: true },
  megaBall: { type: Number, required: true },
  megaplier: { type: String, required: true },
  big_winners: {
    match_type: { type: String },
    states: { type: String }
  },
  est_jackpot: { type: String },
  cash_option: { type: String }
})
