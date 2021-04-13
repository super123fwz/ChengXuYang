// pages/drugs-info/drugs-info.js
const api = require('../../utils/requestutil.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    drugs_info: {
      id: 1,
      name: "阿莫西林",
      code: 1241245125,
      producer: "西南制药",
      buy_price: 30,
      sell_price: 32,
      retail_price: 100
    },
  },
  bindblur: function (event) {
    var num = event.detail.value
    if (num == null || num == "") {
      this.setData({
        number: 0
      })
    } else {
      this.setData({
        number: num
      })
    }
  },
  stepperAdd: function () {
    this.setData({
      number: this.data.number + 1
    })
  },
  stepperReduce: function () {
    if (this.data.number > 0) {
      this.setData({
        number: this.data.number - 1
      })
    }

  },
  modify: function () {
    wx.navigateTo({
      url: '/pages/drugs-add/drugs-add?drugs_info=' + JSON.stringify(this.data.drugs_info),
    })
  },
  modifyNum: function (e) {
    var type = e.currentTarget.dataset.type
    var data = this.data.drugs_info
    var that = this
    if (this.data.number <= 0) {
      wx.showToast({
        title: '修改数量不能为空',
        icon: 'none'
      })
      return
    }
    if (type == "expend") {
      data.retailPrice = data.retailPrice - this.data.number
    } else if (type == "deposit") {
      data.retailPrice = data.retailPrice + this.data.number
    }

    if (data.retailPrice < 0) {
      wx.showToast({
        title: '数量不能小于0',
        icon: 'error'
      })
      return
    }
    wx.showModal({
      title: '提示',
      content: '确认修改数量为',
      success(res) {
        if (res.cancel) {
          return
        } else if (res.confirm) {
          that.drugsmodif(data)
        }
      }
    })

  },
  drugsmodif: function (data) {
    api.drugActionSet(data).then(res => {
      if (res.data.message == "成功") {
        app.globalData.isUpdataDrugs = true
        this.setData({
          drugs_info: data
        })
      }
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var info = JSON.parse(options.info)
    console.log("info", info);
    this.setData({
      drugs_info: info
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