// pages/permission/permission.js
const api = require('../../utils/requestutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      mobile: null,
      password: null,
      affirmpassword: null,
    }
  },
  bindinput: function (e) {
    var value = e.detail.value
    var user = this.data.user
    switch (e.target.dataset.type) {
      case "user":
        user.mobile = value
        break;
      case "affirmpassword":
        user.affirmpassword = value
        break;
      case "password":
        user.password = value
        break;
      default:
        break;
    }
    this.setData({
      user: user
    })
  },
  bindsign: function () {
    var data = this.data.user
    if (data.password != data.affirmpassword) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'error',
        duration: 2000
      })
      return
    }
    data = {
      mobile: data.mobile,
      password: data.password,
    }
    console.log("data", data)
    api.userActionregister(data).then(res => {
      console.log(res)
    }).catch(err => {

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})