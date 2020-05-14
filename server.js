let express = require('express')
let bodyParser = require('body-parser')
let app= express()
let preperDataOnce= require('./config/pereperDataOnce')
require('./config/database')
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('/api/movies',require('./Router/moviesRouter'))
app.use('/api/members',require('./Router/membersRouter'))
preperDataOnce.GetMembers()

preperDataOnce.GetMovies()

app.listen(8000)

