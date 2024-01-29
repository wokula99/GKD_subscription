import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'dev.xesam.chelaile.app.module.func.SplashActivity',
            'dev.xesam.chelaile.app.module.PanelHostActivity',
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          ],
          matches:
            'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13062991',
            'https://i.gkd.li/import/13062984',
            'https://i.gkd.li/import/13464325',
            'https://i.gkd.li/import/14065904', //activityId: dev.xesam.chelaile.app.module.line.gray.LineDetailActivity
          ],
        },
        {
          key: 1,
          activityIds: 'dev.xesam.chelaile.app.module.PanelHostActivity',
          matches:
            '[id="com.ygkj.chelaile.standard:id/cll_line_single_ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13625374',
        },
      ],
    },
  ],
});
