cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.Acceleration",
    "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "Acceleration"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.accelerometer",
    "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "navigator.accelerometer"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.CompassError",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassError"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.CompassHeading",
    "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "CompassHeading"
    ]
  },
  {
    "id": "cordova-plugin-device-orientation.compass",
    "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
    "pluginId": "cordova-plugin-device-orientation",
    "clobbers": [
      "navigator.compass"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-device-motion": "1.2.5",
  "cordova-plugin-device-orientation": "1.0.7"
};
// BOTTOM OF METADATA
});