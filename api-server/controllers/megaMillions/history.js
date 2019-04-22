'use strict'
const mongoose = require('mongoose')
const megaMillionsSchema = require('../../schemas/megaMillions/drawing')
const MegaMillionsHistory = mongoose.model('History', megaMillionsSchema)
const MegaMillionsDrawing = require('../../classes/MegaMillionsDrawing')

const instanceCheck = (megaMillionsDrawing) => {
  if (!(megaMillionsDrawing instanceof MegaMillionsDrawing)) {
    throw Error('Supplied object must be an instance of MegaMillionsDrawing class')
  }
}

module.exports.create_new_drawing = new Promise((resolve, reject) => {
  return (megaMillionsDrawing) => {
    try { instanceCheck(megaMillionsDrawing) } catch(err) { throw Error(err) }
    MegaMillionsHistory.create(megaMillionsDrawing, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  }
})

module.exports.delete_drawing_by_id = new Promise((resolve, reject) => {
  return (id) => {
    MegaMillionsHistory.deleteOne({ _id: id }, (err) => {
      err ? reject(err) : resolve('{"success": true}')
    })
  }
})

module.exports.update_drawing_by_id = new Promise((resolve, reject) => {
  return (megaMillionsDrawing) => {
    try { instanceCheck(megaMillionsDrawing) } catch(err) { throw Error(err) }
    MegaMillionsHistory.update({ _id: megaMillionsDrawing.id }, megaMillionsDrawing, (err) => {
      err ? reject(err) : resolve('{"success": true}')
    })
  }
})

module.exports.get_drawing_by_id = new Promise((resolve, reject) => {
  return (id) => {
    MegaMillionsHistory.findOne({ _id: id }, (err, drawing) => {
      err ? reject(err) : resolve(drawing)
    })
  }
})

module.exports.get_drawing_by_date = new Promise((resolve, reject) => {
  return (date) => {
    MegaMillionsHistory.findOne({ date: date }, (err, drawing) => {
      err ? reject(err) : resolve(drawing)
    })
  }
})

module.exports.get_all_drawings = new Promise((resolve, reject) => {
  return () => {
    MegaMillionsHistory.findOne({}, (err, drawings) => {
      err ? reject(err) : resolve(drawings)
    })
  }
})

module.exports.get_drawings_by_date_range = new Promise((resolve, reject) => {
  return (from, to) => {
    let query = { date: { $gte: from, $lte: to } }
    MegaMillionsHistory.find(query, (err, drawings) => {
      err ? reject(err) : resolve(drawings)
    })
  }
})
