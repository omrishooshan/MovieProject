let mongoose = require('mongoose')

let Schema = mongoose.Schema

let MoviesSchema = new Schema({
    Name: String,
    Genres : [String],
    Image : String ,//URL OF THE MOVIE PICTURE
    Permiered : Date
})

module.exports = mongoose.model('Movies',MoviesSchema)