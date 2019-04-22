'use strict'

module.exports.MegaMillionsDrawing = class {
  wbMax = 70
  mbMax = 25
  constructor(obj) {
    this.id = obj.id
    this.date = obj.date
    this.wb1 = obj.wb1
    this.wb2 = obj.wb2
    this.wb3 = obj.wb3
    this.wb4 = obj.wb4
    this.wb5 = obj.wb5
    this.megaball = obj.megaball
    this.megaplier = obj.megaplier
    this.big_winners = obj.big_winners
    this.est_jackpot = obj.est_jackpot
    this.cash_option = obj.cash_option
  }

  set date(date) {
    try { this.date = this.validateDate(date) } catch (err) { throw Error(err) }
  }
  set wb1(num) {
    try { this.wb1 = this.validateWb(num) } catch(err) { throw Error(err) }
  }
  set wb2(num) {
    try { this.wb2 = this.validateWb(num) } catch(err) { throw Error(err) }
  }
  set wb3(num) {
    try { this.wb3 = this.validateWb(num) } catch(err) { throw Error(err) }
  }
  set wb4(num) {
    try { this.wb4 = this.validateWb(num) } catch(err) { throw Error(err) }
  }
  set wb5(num) {
    try { this.wb5 = this.validateWb(num) } catch(err) { throw Error(err) }
  }
  set megaball(num) {
    try { this.megaball = this.validateMB(num) } catch(err) { throw Error(err) }
  }

  // Static Methods
  static validateMB(num) {
    let tempNum
    // MB must be a number
    try { tempNum = Number(num) } catch(err) { throw Error(err) }
    // MB must be from 1 to maxMB value
    if (tempNum < 1 || tempNum > this.mbMax) { 
      throw Error(`Megaball number must be a number from 1 to ${this.mbMax}`)
    }
    return tempNum
  }
  static validateWb(num) {
    let tempNum
    // WB must be a number
    try { tempNum = Number(num) } catch(err) { throw Error(err) }
    // WB must be from 1 to maxWB value
    if (tempNum < 1 || tempNum > this.wbMax) { 
      throw Error(`Whiteball number must be a number from 1 to ${this.wbMax}`)
    }
    return tempNum
  }
  static validateDate(date) {
    let tempDate = ''
    // date must be a string
    if (typeof date !== 'string')  { throw Error('Date property must be a string') }
    // date must parse into a date object
    try { tempDate = Date.parse(date) } catch(err) { throw Error('Date string is not in a supported format') }
    // date must fall on tuesday or friday
    if (tempDate.getDay !== 2  || tempDate.getDay !== 5) {
      throw Error('Date must fall on tuesday or friday')
    }
    return tempDate.toDateString()
  }
}
