var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var customer = require('./get.js');
//http://localhost:3000/api/users?id=yourID&name=yourNAME
// npm install express --save
// node name.js
// npm install body-parser --save
// npm install -g nodemon

app.get('/user', customer.findAll);
app.get('/user/search',customer.search);
app.get('/user/role/:role',customer.searchQuery);

app.use(express.static('www'));
console.log('Sever is running at http://localhost:3000');
app.listen(3000);