'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/games', controllers.games.get_all_games)
router.post('/games', controllers.games.create_new_game)
router.get('/games/id=:id', controllers.games.get_game_by_id)
router.put('/games', controllers.games.update_game_by_id)

router.post('/mega_amillions', controllers.megaMillionsHistory.create_new_drawing)
router.delete('/mega_millions/id=:id', controllers.megaMillionsHistory.delete_drawing_by_id)
router.put('mega_millions/id=:id', controllers.megaMillionsHistory.update_drawing_by_id)
router.get('/mega_millions', controllers.megaMillionsHistory.get_all_drawings)
router.get('/mega_millions/range=:from-:to', controllers.megaMillionsHistory.get_drawings_by_date_range)
router.get('/mega_millions/id=:id', controllers.megaMillionsHistory.get_drawing_by_id)
router.get('/mega_millions/date=:date', controllers.megaMillionsHistory.get_drawing_by_date)

module.exports = router
