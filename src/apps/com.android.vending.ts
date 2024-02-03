import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '通知提示-使用Points获得奖励弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.google.android.finsky.activities.MainActivity',
      rules: '[text="使用 Google Play Points 获得奖励"] +3 * > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/14151219',
    },
  ],
});
