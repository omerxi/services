
var ADB = require('./ADB').getInstance("0612345678");
var colors = require('colors/safe');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  ADB.sms("Jacadi a dit: SMS envoyé");
  res.send('done');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(colors.green('listening at http://%s:%s'), host, port);
});
