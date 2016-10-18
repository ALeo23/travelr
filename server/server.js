var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/currency', function(req, res) {
  res.redirect('/');
});

app.get('/favicon.ico', function(req, res) {
  res.send('No image available');
});

app.listen(app.get('port'), function() {
  console.log('Hi Alex, app is now listening on port ' + app.get('port'));
});