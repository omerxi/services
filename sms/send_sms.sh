#!/bin/bash


## send SMS from ADB (adb shell)
function send_sms {
  MESSAGE="$1"
  RECIPIENT="$2"
  echo SENDING to "$RECIPIENT" : message "$MESSAGE"
  am start -n 'com.example.tutorialspoint/.MainActivity' -e recipient $RECIPIENT -e message "$MESSAGE" keyevent "KEYCODE_TAB" && input keyevent "KEYCODE_TAB" && input keyevent "KEYCODE_TAB" && input keyevent "KEYCODE_ENTER" && input keyevent "KEYCODE_BACK"
}

## send SMS from Linux shell
function send_sms_linux {
  MESSAGE="$1"
  RECIPIENT="$2"
  echo SENDING to "$RECIPIENT" : message "$MESSAGE" 
  adb shell "am start -n 'com.example.tutorialspoint/.MainActivity' -e recipient $RECIPIENT -e message \"$MESSAGE\" && input keyevent 61 && input keyevent 61 && input keyevent 66 && input keyevent 3"
}

# send_sms_linux "$1" "$2"
