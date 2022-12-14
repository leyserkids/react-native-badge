import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    isBadgeSupported(): Promise<boolean>;
    getBadgeCount(): Promise<number>;
    setBadgeCount(badgeCount: number): Promise<boolean>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeBadge.d.ts.map