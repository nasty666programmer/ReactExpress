const { request } = require('express');
const express = require('express');
const app = express();
const config = require('config');
const db = require('./db');
const formCheck = db.formsCheck;

var cors = require ('cors'); 
app.use (cors ());


const PORT = config.get('port') || 5000;
console.log("port" +  ' ' + PORT);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit: '500kb'})); // for parsing application/json

// parse application/json

app.use('/login',require('./router/login'));
app.use('/formsCheck',require('./router/formsCheck'));
app.use('/showFormCheck',require('./router/ShowFormCheck'));



app.get('/', function(req, res, next) {
   res.send('index')
  });

  /*(async () => {
      console.log('Starting a server...');
  
      await db.sequelize.sync({ logging: () => { },  });
  
      

  })();*/
  app.listen(PORT);