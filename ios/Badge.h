
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNBadgeSpec.h"

@interface Badge : NSObject <NativeBadgeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Badge : NSObject <RCTBridgeModule>
#endif

@end
