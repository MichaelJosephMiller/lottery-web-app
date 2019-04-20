'use strict'
const gamesSchema = require('../schemas/games')
const mongoose = require('mongoose')
const Games = mongoose.model('Games', gamesSchema)

exports.create_new_game = (req, res) => {
  let game = Games(req.body)
  game.save((err, g) => {
    err ? res.send(err) : res.json(g)
  })
}

exports.get_games = (req, res) => {
  Games.find({}, (err, games) => {
    err ? res.send(err) : res.json(games)
  })
}

exports.get_game_by_id = (req, res) => {
  Games.findOne({ _id: req.body.id }, (err, game) => {
    err ? res.send(err) : res.json(game)
  })
}

exports.update_game = (req, res) => {
  Games.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, game) => {
    err ? res.send(err) : res.json(game)
  })
}

exports.delete_game = (req, res) => {
  Games.findOneAndDelete({ _id: req.body.id }, (err, game) => {
    err ? res.send(err) : res.json('Game successfully deleted')
  })
}
