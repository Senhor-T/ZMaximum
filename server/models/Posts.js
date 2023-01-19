let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
    _id: Schema.Types.ObjectId,
    titulo:{
        type: String,
    },
    descricao:{
        type: String,
    },
    imagePost:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now,
      },
    updatedAt:{
        type: Date,
        default: Date.now,
      },
},{collection:'Posts'})

let Posts = mongoose.model('Posts',postSchema)

module.exports = Posts