const mongoose = require('mongoose')

const novelsSchema = new mongoose.Schema({
    novelname : String,
    novelwrittenby : String
})

const NovelsModal = mongoose.model('novels',novelsSchema)

module.exports = NovelsModal
    