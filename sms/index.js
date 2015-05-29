
var ADB = require('./ADB').getInstance("0612345678");
var colors = require('colors/safe');
var express = require('express');

var app = express();

app.get('/sms/:recipient/:message', function (req, res) {
  console.log(req.params.recipient);
  console.log(req.params.message);
  ADB.sms(req.params.recipient, req.params.message);
  res.send(req.params);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(colors.green('listening at http://%s:%s'), host, port);
});
