const mongoose = require('mongoose')

const NovelistUserSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    favnovels: String,
    favnovelist: String
});

const NovelistUserModal = mongoose.model('novelistusers', NovelistUserSchema)

module.exports = NovelistUserModal
 
