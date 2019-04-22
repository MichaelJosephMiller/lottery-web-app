'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', (req, res) => {
  controllers.games.get_all_games(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.post('/', (req, res) => {
  controllers.games.create_new_game(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/id=:id', (req, res) => {
  controllers.games.get_game_by_id(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.put('/', (req, res) => {
  controllers.games.update_game_by_id(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})

module.exports = router
