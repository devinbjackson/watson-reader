const express = require("express")
const { json } = require("body-parser")
const cors = require('cors');
const axios = require('axios');

const app = express()

app.use(express.static(`${__dirname}/..`))

const port = 3003
app.use(json())
app.use(cors())


app.get('/api/quotes', (req, res, next) => {
    (axios.get("http://api.forismatic.com/api/1.0/?method=getQuote&key=999999&format=json&lang=en")
    .then(function(response) { 
      res.json(response.data)
    }))
})


const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/..index.html"))
})

app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})