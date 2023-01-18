let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
    _id: Schema.Types.ObjectId,
    titulo:{
        type: String
    }
},{collection:'Posts'})

let Posts = mongoose.model('Posts',postSchema)

module.exports = Posts