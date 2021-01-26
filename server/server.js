const { request } = require('express');
const express = require('express');
const app = express();
const config = require('config');
const bodyParser = require('body-parser');


const PORT = config.get('port') || 5000;
console.log("port" + PORT);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/formsCheck',require('./router/formsCheck'));

app.get('/', function(req, res, next) {
   res.send('index')
  });

app.listen(PORT);