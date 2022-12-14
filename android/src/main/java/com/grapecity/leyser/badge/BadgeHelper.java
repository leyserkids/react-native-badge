package com.grapecity.leyser.badge;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import me.leolin.shortcutbadger.ShortcutBadger;

public class BadgeHelper {
  public static final String TAG = "RNBadgeHelper";
  public static final String PREFERENCES_FILE = "BadgeCountFile";
  public static final String BADGE_COUNT_KEY = "BadgeCount";

  private final SharedPreferences sharedPreferences;
  private final Context context;

  BadgeHelper(Context context) {
    sharedPreferences = context.getSharedPreferences(PREFERENCES_FILE, context.MODE_PRIVATE);
    this.context = context;
  }

  public int getBadgeCount() {
    return sharedPreferences.getInt(BADGE_COUNT_KEY, 0);
  }

  public boolean setBadgeCount(int badgeCount) {
    persistentBadgeCount(badgeCount);
    if (badgeCount <= 0) {
      Log.d(TAG, "Remove badge count.");
      return ShortcutBadger.removeCount(context);
    } else {
      Log.d(TAG, String.format("Apply badge count: %d.", badgeCount));
      return ShortcutBadger.applyCount(context, badgeCount);
    }
  }

  public boolean isBadgeSupported() {
    int current = getBadgeCount();
    return setBadgeCount(current);
  }

  private void persistentBadgeCount(int badgeCount) {
    SharedPreferences.Editor editor = sharedPreferences.edit();
    editor.putInt(BADGE_COUNT_KEY, badgeCount);
    editor.apply();
  }
}
