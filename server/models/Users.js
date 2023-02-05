let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    },
    admin:{
        type:Boolean
    },
    favoritos:{
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    updatedAt: {
        type: Date,
        default: Date.now,
      },
},{collection:'Users'})

let Users = mongoose.model('Users',userSchema)

module.exports = Users