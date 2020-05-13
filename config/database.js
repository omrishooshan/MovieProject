let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/subscriptionsDB')

let db = mongoose.connection

db.once('open',()=>{console.log("connected")})





