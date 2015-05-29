var exec = require('child_process').exec;
var sys = require('sys');
var colors = require('colors/safe');

var io = function(error, stdout, stderr) {
  sys.puts(colors.green(stdout));
  sys.puts(colors.red(stderr));
};

var ADB = function(data) {
  if (!(this instanceof ADB)) {
    return new ADB(data);
  }
  exec("adb devices", io);
};

ADB.prototype.sms = function(message) {
  exec("adb shell input keyevent 82 && adb shell am start -n com.nolanlawson.android.simpletalker/.MainActivity -e text '" + message + "'", io);
};

module.exports = {
  getInstance: function(data) {
    return new ADB(data);
  }
};
