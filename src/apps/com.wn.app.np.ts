import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wn.app.np',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text="立即更新"] - [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/14141289',
    },
  ],
});
