// pages/permission/permission.js
const api = require('../../utils/requestutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      mobile: null,
    },
    password: null,
    affirmpassword: null,
  },
  bindinput: function (e) {
    var value = e.detail.value
    var user = this.data.user
    var affirmpassword = this.data.affirmpassword
    var password = this.data.password
    switch (e.target.dataset.type) {
      case "user":
        user.number = value
        break;
      case "affirmpassword":
        affirmpassword = value
        this.setData({
          affirmpassword: affirmpassword
        })
        break;
      case "password":
        password = value
        this.setData({
          password: password
        })
        break;
      case "name":
        user.name = value
        break;
      case "age":
        user.age = value
        break;
      case "sex":
        user.sex = value
        break;
      case "position":
        user.position = value
        break;
      case "telphone":
        user.telphone = value
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
    if (this.data.password != this.data.affirmpassword) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'error',
        duration: 2000
      })
      return
    }
    var registe = {
      mobile: data.number,
      password: this.data.password,
    }
    data.personid = null
    data.hiredate = null
    data.permission = 0
    console.log("data", data)
    // return
    api.userActionregister(registe).then(res => {
      var message = res.data.data
      console.log("message", message)
      if (message == "注册成功") {
        api.employeeAdd(data).then(res => {
          wx.showToast({
            title: '注册成功',
            icon: 'error',
            duration: 2000
          })
          wx.navigateBack({
            delta: 1,
          })
        }).catch(err => {})

      } else if (message == "用户名或密码错误") {
        wx.showToast({
          title: '账号已存在',
          icon: 'error',
          duration: 2000
        })
      } else if (message == "出错了") {
        wx.showToast({
          title: '注册失败',
          icon: 'error',
          duration: 2000
        })
      }
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