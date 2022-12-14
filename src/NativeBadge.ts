import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  isBadgeSupported(): Promise<boolean>;
  getBadgeCount(): Promise<number>;
  setBadgeCount(badgeCount: number): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Badge');
