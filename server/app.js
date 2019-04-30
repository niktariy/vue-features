const express = require("express");
const bodyParser = require("body-parser");
const config = require('./config/config')
let app = express();


app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || config.port, () => {
  console.log(`Server start on port ${config.port} ...`)
})

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.post('/request')