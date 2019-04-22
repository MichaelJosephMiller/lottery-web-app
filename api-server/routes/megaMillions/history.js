'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/megaMillions/history')
const MegaMillionsDrawing = require('../../classes/MegaMillionsDrawing')

router.post('/', (req, res, next) => {
  let drawing
  try { drawing = new MegaMillionsDrawing(req.body) } catch(err) { next(err) }
  controllers.megaMillionsHistory.create_new_drawing(drawing)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.delete('/id=:id', (req, res) => {
  controllers.megaMillionsHistory.delete_drawing_by_id(req.body.id)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.put('/id=:id', (req, res, next)=>{
  let drawing
  try { drawing = new MegaMillionsDrawing(req.body) } catch(err) { next(err) }
  controllers.megaMillionsHistory.update_drawing_by_id(drawing)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/', (req, res)=> {
  controllers.megaMillionsHistory.get_all_drawings()
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/range=:from-:to', (req, res, next)=>{
  let from, to
  try { from = MegaMillionsDrawing.validateDate(req.body.from) } catch(err) { next(err) }
  try { to = MegaMillionsDrawing.validateDate(req.body.to) } catch(err) { next(err) }
  controllers.megaMillionsHistory.get_drawings_by_date_range(from, to)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/id=:id', (req, res)=>{
  controllers.megaMillionsHistory.get_drawing_by_id(req.body.id)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/date=:date', (req, res, next)=>{
  let date
  try { date = MegaMillionsDrawing.validateDate(date) } catch(err) { next(err) }
  controllers.megaMillionsHistory.get_drawing_by_date(date)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})

module.exports = router