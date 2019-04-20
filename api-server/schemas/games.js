'use strict'
const mongoose = require('mongoose')

const GamesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true
  },
  multi_state: {
    type: Boolean,
    required: true,
    default: false
  },
  states: {
    type: [String],
    required: true
  },
  winning_numbers: {
    type: [Number],
    default: undefined
  },
  next_draw_date: {
    type: Date
  },
  est_jackpot: {
    type: String
  },
  cash_option: {
    type: String
  }
})

module.exports = GamesSchema
