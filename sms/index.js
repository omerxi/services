// TODO inject this dependency
var ADB = require('./ADB').getInstance();

var Worker = require('webworker-threads').Worker;
var colors = require('colors/safe');
var express = require('express');

var queue = [];

var worker = new Worker(function() {
  this.onmessage = function(event) {
    postMessage(event.data);
    //self.close();
  };
});

worker.onmessage = function(event) {
  if ("recipient" in event.data) queue.push(event.data);
  else if (queue.length) ADB.sms(queue.shift());
  else console.log("I'm done for now !");
};

var checkQueue = function() {
  worker.postMessage({
    message: "Checking queue ..."
  });
};

setInterval(checkQueue(worker), 1000 * 10);

var app = express();

app.get('/sms/:recipient/:message', function(req, res) {
  console.log(colors.blue(JSON.stringify(req.params, null, 2)));
  worker.postMessage(req.params);
  res.send(req.params);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(colors.green('listening at http://%s:%s'), host, port);
});

/*
var testPhone = process.argv.slice(2);
var id = setInterval(function(i) {
  return function() {
    if (i > 5) clearInterval(id);
    worker.postMessage({
      recipient: testPhone,
      message: 'test ' + (++i) + ' on 5'
    });
  };
}, 250);
*/
