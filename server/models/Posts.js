let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
    _id: Schema.Types.ObjectId,
    shortid:String,
    titulo:{
        type: String,
    },
    descricao:{
        type: String,
    },
    imagePost:{
        type: String
    },
    backgroundImage:{
        type: String
    },
    categoria:{
        type:String
    },
    idImdb:{
        type:String
    },
    nota:{
        type: Number
    },
    data:{
        type:String
    },
    torrent:{
        type:String
    },
    slug:{
        type:String
    },
    views:{
        type: Number
    },
    genero:String,
    genero:Array,
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