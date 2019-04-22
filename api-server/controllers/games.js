'use strict'
const mongoose = require('mongoose')
const gamesSchema = require('../schemas/games')
const Games = mongoose.model('MegaMillions', gamesSchema)

exports.get_all_games = (req, res) => {
  Games.find({}, (err, games) => {
    err ? res.send(err) : res.json(games)
  })
}

exports.update_game_by_id = (req, res) => {
  Games.update({ _id: req.body.id }, req.body, (err) => {
    err ? res.send(err) : res.json('{"success": true}')
  })
}

exports.get_game_by_id = (req, res ) => {
  Games.find({ name: req.body.id }, (err, game) => {
    err ? res.send(err) : res.json(game)
  })
}

exports.create_new_game = (req, res) => {
  Games.create(req.body, (err, game) => {
    err ? res.send(err) : res.json(game)
  })
}
