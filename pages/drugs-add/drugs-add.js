// pages/drugs-add/drugs-add.js
const api = require('../../utils/requestutil.js')
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    drugs_info: {
      name: null,
      code: null,
      producer: null,
      buyPrice: null,
      sellPrice: null
    },
    isAdd: true
  },
  bindinput: function (e) {
    var value = e.detail.value
    var drugs_info = this.data.drugs_info
    switch (e.currentTarget.dataset.type) {
      case "name":
        drugs_info.name = value
        break;
      case "code":
        drugs_info.code = value
        break;
      case "producer":
        drugs_info.producer = value
        break;
      case "buyPrice":
        drugs_info.buyPrice = parseInt(value)
        break;
      case "sellPrice":
        drugs_info.sellPrice = parseInt(value)
        break;
      default:
        break;
    }
    this.setData({
      drugs_info: drugs_info
    })
  },
  modify: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '确认修改',
      success(res) {
        if (res.confirm) {
          that.modifydrugs()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  add: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '确认添加',
      success(res) {
        if (res.confirm) {
          that.add()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  adddrugs: function () {
    var data = this.data.drugs_info
    data.retailPrice = 0
    if (data.name != null && data.code != null && data.buyPrice != null && data.producer && data.sellPrice != null) {
      api.drugActionAdd(data).then(res => {

        if (res.data.message == "成功") {
          app.globalData.isUpdataDrugs = true
          wx.navigateBack({
            delta: 1,
          })
        }
      })
    } else {
      wx.showToast({
        title: '相关信息不能为空',
        icon: 'error'
      })
    }
  },
  modifydrugs: function () {
    var data = this.data.drugs_info
    console.log("data", data)
    api.drugActionSet(data).then(res => {
      console.log("res", res)
      if (res.data.message == "成功") {
        app.globalData.isUpdataDrugs = true
        this.setData({
          drugs_info: data
        })
        wx.navigateBack({
          delta: 1,
        })
      }
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options", options);
    if (options.drugs_info) {
      this.setData({
        drugs_info: JSON.parse(options.drugs_info),
        isAdd: false
      })
    }
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