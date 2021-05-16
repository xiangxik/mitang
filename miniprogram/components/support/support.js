Component({
  methods: {
    onTap() {
      const info = wx.getAccountInfoSync()
      const { appId } = info.miniProgram
      wx.navigateToMiniProgram({
        appId: 'wxb9048e20704cf832',
        path: '/pages/index/index',
        extraData: { appId, source: 'customerMiniProgram' } // 来源客户小程序
      })
    },
  },
})
