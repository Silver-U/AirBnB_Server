const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    rate: {type: Number, required: true},
    idUser: {type: String, required: true},
    idAirbnb: {type: String, required: true},
    message: {type: String}
})

module.exports = mongoose.model('Comment', commentSchema)