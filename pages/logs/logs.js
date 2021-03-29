// logs.js
const util = require('../../utils/util.js')
const api = require('../../utils/requestutil.js')
var app = getApp()
Page({
  data: {
    login: {
      mobile: null,
      password: null
    }
  },
  // bindinput:function(e){
  //   this.setData({
  //     logs_phone:e.detail.value
  //   })
  // },
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
    wx.showLoading({
      title: '加载中',
    })
    var that = this
    var loginInfo = this.data.login
    if (!loginInfo.mobile || !loginInfo.password) {
      wx.showToast({
        title: '请输入工号或密码',
        icon: 'error',
        duration: 2000
      })
      return
    }
    api.userActionLogin(loginInfo).then(res => {
      wx.hideLoading()
      var requestdata = res.data
      console.log("requestdata", requestdata);
      if (requestdata.message == "成功") {
        wx.setStorage({
          key: "userInfo",
          data: data,
        })

        wx.getUserInfo({
          success(e) {
            var info = that.extend({}, e.userInfo, loginInfo)
            console.log("info", info)
            wx.setStorage({
              key: "userInfo",
              data: info
            })
          },
          fail(err) {
            console.log("err", err);
          }
        })
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
        wx.navigateTo({
          url: '/pages/permission/permission',
        })
      }

    }).catch(err => {
      wx.hideLoading()
    })
    // wx.getUserInfo({
    //   success: (res) => {
    //     wx.setStorage({
    //       key: "userInfo",
    //       data: res.userInfo,
    //     })
    //     wx.hideLoading()
    //     wx.switchTab({
    //       url: '/pages/home/home',
    //     })
    //   },
    //   fail: (e) => {
    //     wx.hideLoading()
    //     wx.showToast({
    //       title: '登录失败',
    //       icon: 'error',
    //       duration: 2000
    //     })
    //   }
    // })
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
  },
  extend(des, src, override) {
    if (src instanceof Array) {
      for (var i = 0, len = src.length; i < len; i++)
        extend(des, src[i], override);
    }
    for (var i in src) {
      if (override || !(i in des)) {
        des[i] = src[i];
      }
    }
    return des;
  }
})