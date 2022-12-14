import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-badge' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const BadgeModule = isTurboModuleEnabled
  ? require('./NativeBadge').default
  : NativeModules.Badge;

const Badge = BadgeModule
  ? BadgeModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function isBadgeSupported(): Promise<boolean> {
  return Badge.isBadgeSupported();
}

export function getBadgeCount(): Promise<number> {
  return Badge.getBadgeCount();
}

export function setBadgeCount(badgeCount: number): Promise<boolean> {
  return Badge.setBadgeCount(badgeCount);
}
