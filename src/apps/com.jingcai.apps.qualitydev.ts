import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingcai.apps.qualitydev',
  name: '到梦空间',
  groups: [
    {
      key: 1,
      name: '功能类-学习活动',
      quickFind: true,
      activityIds:
        'com.jingcai.apps.qualitydev.qualitync.activity_home.ActivityMainTab',
      rules: '[text="立即参与"][vid="tv_next"] -2 [text="关闭"][vid="tv_step"]',
      snapshotUrls: 'https://i.gkd.li/import/14054117',
    },
  ],
});
