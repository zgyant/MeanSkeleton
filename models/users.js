let mongoose = require('mongoose')
let usersSchema = mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  user_name: {
    type:String,
    unique:true,
    required:true
  },
  password: {
    type:String,
    required:true
  }
}, { collection: 'users' })
let Users = mongoose.model('Users', usersSchema)
module.exports = Users
