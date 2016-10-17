var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.listen(3000, function() {
  console.log('Hi Alex, app in now listening on port 3000');
});