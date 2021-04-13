// pages/mine-info/mine-info.js
const api = require('../../utils/requestutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputIs: true,
    userInfo: null
  },
  modify: function () {
    var data = this.data.userInfo
    if (!this.data.inputIs) {
      wx.showModal({
        title: '提示',
        content: '是否确认修改',
        success(res) {
          if (res.confirm) {
            api.employeeUpdate(data).then(res => {
              console.log("res", res)
              if (res.data.message == "成功") {
                wx.setStorage({
                  key: 'userInfo',
                  data: data,
                })
                this.setData({
                  inputIs: !this.data.inputIs
                })
              }
            }).catch(err => {})
          } else if (res.cancel) {
            return
          }
        }
      })

    } else {
      this.setData({
        inputIs: !this.data.inputIs
      })
    }

  },
  deposit: function () {
    if (this.data.inputIs) {
      wx.navigateBack({
        delta: 1,
      })
    } else {
      this.setData({
        inputIs: true
      })
    }

  },
  bindinput: function (e) {
    var value = e.detail.value
    var userInfo = this.data.userInfo
    switch (e.currentTarget.dataset.type) {
      case "name":
        userInfo.name = value
        break;
      case "age":
        userInfo.age = value
        break;
      case "sex":
        userInfo.sex = value
        break;
      case "personid":
        userInfo.personid = value
        break;
      case "position":
        drugs_info.position = value
        break;
      case "telphone":
        userInfo.telphone = value
        break;
      default:
        break;
    }
    this.setData({
      userInfo: userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        console.log("data", res.data)
        that.setData({
          userInfo: res.data
        })
      }
    })
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