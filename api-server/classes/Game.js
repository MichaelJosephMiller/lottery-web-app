'use strict'

module.exports.Games = class {
  constructor(obj) {
    this.name = obj.name
    this.participating_states = obj.participating_states
    this.next_draw_date = obj.next_draw_date
    this.current_est_jackpot = obj.current_est_jackpot
    this.current_cash_option = obj.current_cash_option
  }
}