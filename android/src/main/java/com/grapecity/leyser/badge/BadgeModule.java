package com.grapecity.leyser.badge;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.annotation.NonNull;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import me.leolin.shortcutbadger.ShortcutBadger;

public class BadgeModule extends com.grapecity.leyser.badge.BadgeSpec {
  public static final String NAME = "Badge";

  private final ReactApplicationContext context;

  BadgeModule(ReactApplicationContext context) {
    super(context);
    this.context = context;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void getBadgeCount(Promise promise) {
    promise.resolve(new BadgeHelper(context).getBadgeCount());
  }

  @ReactMethod
  public void setBadgeCount(int badgeCount, Promise promise) {
    promise.resolve(new BadgeHelper(context).setBadgeCount(badgeCount));
  }

  @ReactMethod
  public void isBadgeSupported(Promise promise) {
    promise.resolve(new BadgeHelper(context).isBadgeSupported());
  }
}
