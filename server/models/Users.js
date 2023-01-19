let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:{
        type: String
    },
    password:{
        type: String
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