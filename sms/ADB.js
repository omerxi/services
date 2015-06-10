var colors = require('colors/safe');
var exec = require('child_process').exec;

var io = function(error, stdout, stderr) {
  console.log(colors.green(stdout));
  console.log(colors.red(stderr));
};

var ADB = function(data) {
  if (!(this instanceof ADB)) {
    return new ADB(data);
  }
  exec("adb devices", io);
};

var makeShellCommand = function(sms) {
  var message = sms.message.replace(/'/, "\\'");
  return 'adb shell "am start -n \'com.example.tutorialspoint/.MainActivity\' -e recipient ' + " '" + sms.recipient + "'" +
    ' -e message ' + "$'" + message + "' && input keyevent 61 && input keyevent 61 && input keyevent 66 && input keyevent 3\"";
};

ADB.prototype.sms = function(sms) {
  var command = makeShellCommand(sms);
  console.log(colors.green(command));
  //exec('adb shell "dumpsys input_method | grep -q \'mScreenOn=false\' && input keyevent 26;"', io);
  exec(command, io);
};



module.exports = {
  getInstance: function(data) {
    return new ADB(data);
  }
};
