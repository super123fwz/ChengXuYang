// logs.js
const util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    logs_phone:null
  },
  bindinput:function(e){
    this.setData({
      logs_phone:e.detail.value
    })
  },
  bindinfo(e) {
    wx.showLoading({
      title: '加载中',
    })

    wx.getUserInfo({
      success: (res) => {
        wx.setStorage({
          key: "userInfo",
          data: res.userInfo,
        })
        wx.hideLoading()
        wx.switchTab({
          url: '/pages/home/home',
        })
      },
      fail: (e) => {
        wx.hideLoading()
        wx.showToast({
          title: '登录失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },
  onLoad() {
    wx.showLoading({
      title: '登录中',
    })
    wx.getStorage({
      key: 'userInfo',
      success:(e)=>{
        if(e.data){
          wx.switchTab({
            url: '/pages/home/home',
          })
        }else{
          wx.hideLoading()
        }
      },
      fail: (e) => {
        wx.showToast({
          title: '登录失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
  }
})