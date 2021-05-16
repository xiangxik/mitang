const app = getApp()

Page({
  data: {
    isAccountAssistant: app.globalData.isAccountAssistant
  },
  onLoad() {

  },
  init() {

  },
  onShareAppMessage() {
    return {
      title: '密塘',
      path: '/pages/index/index',
      imageUrl: '/images/share.png',
    }
  },
})