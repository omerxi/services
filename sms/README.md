Sending SMS from a PC on Linux using an Android telephone

# Notes

The nmp web server is not mandatory;
once adb is installed on Linux and the debugging is activated on the phone,
type this kind of command in the adb shell:

    am start -n 'com.example.tutorialspoint/.MainActivity' -e recipient 0642428272 -e message 'test 2 jmv' && input keyevent 61 && input keyevent 61 && input keyevent 66 && input keyevent 3

Or, for executing one command from the Linux shell:   

    adb shell "am start -n 'com.example.tutorialspoint/.MainActivity' -e recipient $RECIPIENT -e message $MESSAGE && input keyevent 61 && input keyevent 61 && input keyevent 66 && input keyevent 3"

( put in shell command `send_sms.sh` )

# To install
See [docker config.](../docker/services/sms)

    npm install

# To run

    npm start

# Links
http://www.tutorialspoint.com/android/android_sending_sms.htm
http://www.tutorialspoint.com/android/android_hello_world_example.htm
http://stackoverflow.com/questions/7789826/adb-shell-input-events
http://supertos.free.fr/supertos.php?page=1110

[Android Debug Bridge](http://developer.android.com/tools/help/adb.html)

[Installer et utiliser ADB](https://developer.mozilla.org/fr/Firefox_OS/D%C3%A9boguer/Installer_ADB)
[Firefox: Déboguer/Installer ADB](https://developer.mozilla.org/fr/Firefox_OS/D%C3%A9boguer/Installer_ADB)

Settings on Linux PC
http://developer.android.com/tools/device.html
Activate the debugging on the phone:
http://developer.android.com/tools/help/adb.html
(don't forget to click on the phone to enable the specific PC)

