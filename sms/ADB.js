var colors = require('colors/safe');
var exec = require('child_process').exec;
//var execSync = require('exec-sync');

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
  return "adb shell dumpsys input_method | grep -Po 'mScreenOn=false' &> /dev/null; if [ $? == 0 ]; then adb shell input keyevent 26; fi" + " && "
  "adb shell \"am start -e recipient '" + sms.recipient + "' -e message '" + sms.message + "' 'com.example.tutorialspoint/.MainActivity' && input keyevent 20 && input keyevent 20 && input keyevent 66 && input keyevent 3\"";
};

ADB.prototype.sms = function(sms) {
  var command = makeShellCommand(sms);
  console.log(colors.green(command));
  exec(command);
};

module.exports = {
  getInstance: function(data) {
    return new ADB(data);
  }
};
