package com.grapecity.leyser.badge;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class BadgeSpec extends ReactContextBaseJavaModule {
  BadgeSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void isBadgeSupported(Promise promise);
  public abstract void getBadgeCount(Promise promise);
  public abstract void setBadgeCount(int badgeCount, Promise promise);
}
