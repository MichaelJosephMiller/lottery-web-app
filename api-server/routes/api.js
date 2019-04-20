'use strict'
const express = require('express')
const router = express.Router()
const games = require('../controllers/gamesController')

router.get('/api/', games.get_games)
router.post('/api', games.create_new_game)
router.get('/api/id', games.get_game_by_id)
router.put('/api/id', games.update_game)
router.post('/api/id', games.delete_game)

module.exports = router
