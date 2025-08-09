const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema({}, { timestamps: true })

const Hospital = mongoose.model('Hospital', hospitalSchema)
module.exports = Hospital