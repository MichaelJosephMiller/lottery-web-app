'use strict'
const mongoose = require('mongoose')
const gamesSchema = require('../schemas/games')
const Games = mongoose.model('Games', gamesSchema)
const Game = require('../classes/Game')

const instanceCheck = (game) => {
  if (!(game instanceof Game)) {
    throw Error('game object must be an instance of Game class')
  }
}

exports.get_all_games = new Promise((resolve, reject) => {
  return () => {
    Games.find({}, (err, games) => {
      err ? reject(err) : resolve(games)
    })
  }
})

exports.update_game_by_id = new Promise((resolve, reject) => {
  return (game) => {
    try { instanceCheck(game) } catch(err) { throw Error(err) }
    Games.update({ _id: game.id }, game, (err) => {
      err ? reject(err) : resolve('{"success": true}')
    })
  }
})

exports.get_game_by_id = new Promise((resolve, reject) => {
  return (id) => {
    Games.find({ _id: id }, (err, game) => {
      err ? reject(err) : resolve(game)
    })
  }
})

exports.create_new_game = new Promise((resolve, reject) => {
  return (game) => {
    try { instanceCheck(game) } catch(err) { throw Error(err) }
    Games.create(game, (err, game) => {
      err ? reject(err) : resolve(game)
    })
  }
})
