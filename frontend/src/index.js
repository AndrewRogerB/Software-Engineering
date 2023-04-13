const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const users = require('./users');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'accounts',
  password : 'KingCorn',
  database : 'accounts'
});

connection.connect();

const port = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(users(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);

});
