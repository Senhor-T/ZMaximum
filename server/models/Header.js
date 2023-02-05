let mongoose = require('mongoose')
let Schema = mongoose.Schema

let headerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    shortid:String,
    titulo:{
        type:String,
    },
    descricao:{
        type:String,
    },
    imagePost:{
        type:String
    },
    backgroundImage:{
        type:String
    },
   
    nota:{
        type: Number
    },
    
    header:{
        type:String
    },

},{collection:'Header'})

let Header = mongoose.model('Header',headerSchema)

module.exports = Header