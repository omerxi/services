var colors = require('colors/safe');
var exec = require('child_process').exec;
var execSync = require('exec-sync');

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
  return "adb shell \"am start -e recipient '" + sms.recipient + "' -e message '" + sms.message + "' -n 'com.example.tutorialspoint/.MainActivity' && input keyevent 20 && input keyevent 20 && input keyevent 66 && input keyevent 3\"";
};

ADB.prototype.sms = function(sms) {
  var command = makeShellCommand(sms);
  console.log(colors.green(command));
  execSync(command);
  //exec("adb shell am start -n com.nolanlawson.android.simpletalker/.MainActivity -e text 'Omerxi a dit : SMS envoyé'", io);
};

module.exports = {
  getInstance: function(data) {
    return new ADB(data);
  }
};
