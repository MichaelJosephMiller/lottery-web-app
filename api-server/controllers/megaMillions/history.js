'use strict'
const mongoose = require('mongoose')
const megaMillionsSchema = require('../../schemas/megaMillions')
const MegaMillionsHistory = mongoose.model('History', megaMillionsSchema)

module.exports.create_new_drawing = (req, res) => {
  MegaMillionsHistory.create(req.body, (err, drawing) => {
    err ? res.send(err) : res.json(drawing)
  })
}

module.exports.delete_drawing_by_id = (req, res) => {
  MegaMillionsHistory.deleteOne({ _id: req.body.id }, (err) => {
    err ? res.send(err) : res.send('Drawing successfully deleted')
  })
}

module.exports.update_drawing_by_id = (req, res) => {
  MegaMillionsHistory.update({ _id: req.body.id }, (err) => {
    err ? res.send(err) : res.send('Drawing updated')
  })
}

module.exports.get_drawing_by_id = (req, res) => {
  MegaMillionsHistory.findOne({ _id: req.body.id }, (err, drawing) => {
    err ? res.send(err) : res.json(drawing)
  })
}

module.exports.get_drawing_by_date = (req, res) => {
  MegaMillionsHistory.findOne({ date: req.body.date }, (err, drawing) => {
    err ? res.send(err) : res.json(drawing)
  })
}
module.exports.get_all_drawings = (req, res) => {
  MegaMillionsHistory.findOne({}, (err, drawings) => {
    err ? res.send(err) : res.json(drawings)
  })
}

module.exports.get_drawings_by_date_range = (req, res) => {
  let query = { date: { $gte: req.body.from, $lte: req.body.to } }
  MegaMillionsHistory.find(query, (err, drawings) => {
    err ? res.send(err) : res.json(drawings)
  })
}
