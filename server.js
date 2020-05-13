let express = require('express')
let bodyParser = require('body-parser')
let app= express()
let preperDataOnce= require('./config/pereperDataOnce')
require('./config/database')
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
preperDataOnce.GetMembers()


app.listen(8000)

