import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.nlyuming.duanju.ting',
  name: '星影视频',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'cn.nlyuming.duanju.ting.MainActivity',
      rules: '[desc="了解更多"] - [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/14151009',
    },
  ],
});
