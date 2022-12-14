"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBadgeCount = getBadgeCount;
exports.isBadgeSupported = isBadgeSupported;
exports.setBadgeCount = setBadgeCount;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-badge' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const BadgeModule = isTurboModuleEnabled ? require('./NativeBadge').default : _reactNative.NativeModules.Badge;
const Badge = BadgeModule ? BadgeModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function isBadgeSupported() {
  return Badge.isBadgeSupported();
}
function getBadgeCount() {
  return Badge.getBadgeCount();
}
function setBadgeCount(badgeCount) {
  return Badge.setBadgeCount(badgeCount);
}
//# sourceMappingURL=index.js.map