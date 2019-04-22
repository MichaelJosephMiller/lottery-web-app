'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.post('/', (req, res) => {
  controllers.megaMillionsHistory.create_new_drawing(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.delete('/id=:id', (req, res) => {
  controllers.megaMillionsHistory.delete_drawing_by_id(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.put('/id=:id', (req,res)=>{
  controllers.megaMillionsHistory.update_drawing_by_id(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/', (req, res)=> {
  controllers.megaMillionsHistory.get_all_drawings(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/range=:from-:to', (req,res)=>{
  controllers.megaMillionsHistory.get_drawings_by_date_range(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/id=:id', (req,res)=>{
  controllers.megaMillionsHistory.get_drawing_by_id(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})
router.get('/date=:date', (req, res)=>{
  controllers.megaMillionsHistory.get_drawing_by_date(req.body)
    .then(result => res.json(result))
    .catch(err => res.send(err))
})

module.exports = router