const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
const routes   = require('./routues')
require('dotenv').config()

const app     = express()
const port    = process.env.PORT || 3000

mongoose.connect(process.env.URL_MONGO_MLAB, {useNewUrlParser : false})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
});

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', routes)

app.listen(port, function() {
    console.log('Listening on port ', port)
})


