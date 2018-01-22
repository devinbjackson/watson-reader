const express = require("express")
const { json } = require("body-parser")
const cors = require('cors');
const axios = require('axios');
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');
var config = require("./config.js")

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

app.get('/api/voice/:text/:voice', (req, res, next) => {
    const {username, password} = config;
    var text_to_speech = new TextToSpeechV1 ({
        username,
        password
      });
      const {text, voice} = req.params
      var params = {
        text,
        voice,
        accept: 'audio/wav'
      };  
      text_to_speech.synthesize(params).on('error', function(error) {
        console.log('Error:', error);
      }).pipe(fs.createWriteStream('./audio/quote_audio.wav'));
      res.json('done')
})


const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/..index.html"))
})

app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})