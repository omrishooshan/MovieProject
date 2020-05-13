let express = require('express')
let bodyParser = require('body-parser')
let app= express()
require('./config/database')
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('api/')


