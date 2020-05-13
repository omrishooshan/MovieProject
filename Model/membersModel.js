let mongoose = require('mongoose')

let Schema = mongoose.Schema

let MembersSchema = new Schema({
   Name : String,
   Email : String,
   City: String
})

module.exports = mogoose.model('Members',MembersSchema)