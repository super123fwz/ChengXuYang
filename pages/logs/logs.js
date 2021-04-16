// logs.js
const util = require('../../utils/util.js')
const api = require('../../utils/requestutil.js')
var app = getApp()

Page({
  data: {
    login: {
      mobile: null,
      password: null,
    }
  },
  user: function (e) {
    var login = this.data.login
    login.mobile = e.detail.value
    this.setData({
      login: login
    })
  },
  password: function (e) {
    var login = this.data.login
    login.password = e.detail.value
    this.setData({
      login: login
    })
  },
  bindinfo(e) {
    var loginInfo = this.data.login
    if (!loginInfo.mobile || !loginInfo.password) {
      wx.showToast({
        title: '请输入工号或密码为空',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.showLoading({
      title: '加载中',
    })
    api.userActionLogin(loginInfo).then(res => {
      wx.hideLoading()
      var requestdata = res.data
      if (requestdata.message == "成功") {
        app.globalData.mobile = loginInfo.mobile
        wx.switchTab({
          url: '/pages/home/home',
        })
      } else if (requestdata.message == "用户名或密码错误") {
        wx.showToast({
          title: '账号密码错误',
          icon: 'error',
          duration: 2000
        })
      } else if (requestdata.message == "出错了") {
        wx.showToast({
          title: '用户未注册',
          icon: 'error',
          duration: 2000
        })
      }
    }).catch(err => {
      wx.hideLoading()
    })
  },
  registerbindinfo: function () {
    wx.navigateTo({
      url: '/pages/permission/permission',
    })
  },
  onLoad() {
    wx.showLoading({
      title: '登录中',
    })
    wx.getStorage({
      key: 'userInfo',
      success: (e) => {
        if (e.data) {
          wx.switchTab({
            url: '/pages/home/home',
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'error',
            duration: 2000
          })
          wx.hideLoading()
        }
      },
      fail: (e) => {
        wx.hideLoading()

      }
    })
  },

})