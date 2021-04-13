// pages/home/home.js
var app = getApp()
const api = require('../../utils/requestutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_info: null,
    durgs: null,
    durgs_list: [{
      id: 1,
      name: "阿莫西林"
    }, {
      id: 2,
      name: "阿莫西林"
    }, {
      id: 3,
      name: "阿莫西林"
    }],
    mobile: null
  },
  drugsInfo: function (e) {
    console.log("e", e)
    var id = e.target.id
    var list = this.data.durgs_list
    list.forEach(res => {
      if (res.id == id) {
        wx.navigateTo({
          url: '../drugs-info/drugs-info?info=' + JSON.stringify(res),
        })
      }
    });

  },
  drugsAdd: function () {
    wx.navigateTo({
      url: '../drugs-add/drugs-add',
    })
  },
  delebind: function () {
    this.setData({
      search_info: null,
      durgs: this.data.durgs_list
    })
  },
  searchInput: function (e) {
    var info = e.detail.value
    this.setData({
      search_info: info
    })
    if (info == null || info == "") {
      this.setData({
        durgs: this.data.durgs_list
      })
    } else {
      for (var i in (this.data.durgs_list)) {
        var res = this.data.durgs_list[i]
        if (res.code == info || res.name == info) {
          this.setData({
            durgs: [res]
          })
          return
        } else {
          this.setData({
            durgs: []
          })
        }
      }
    }
  },

  load: function () {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    api.drugActionList().then(res => {
      var data = res.data
      console.log("data", data);
      app.globalData.isUpdataDrugs = false
      that.setData({
        durgs: data.data,
        durgs_list: data.data
      })
      wx.hideLoading()
    }).catch(err => {
      wx.hideLoading()
    })

  },
  getinfo(data) {
    var that = this
    api.employeeActionGet(data).then(res => {
      console.log("res", res)
      wx.setStorage({
        key: 'userInfo',
        data: res.data.data,
        success() {
          app.globalData.ispush = false
          that.load()
        }
      })
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var data = {
      number: app.globalData.mobile
    }
    if (data.number == null) {
      wx.getStorage({
        key: 'userInfo',
        success(res) {
          if (res.data) {
            that.load()
          } else {
            wx.showToast({
              title: '获取信息失败',
              image: "none"
            })
          }
        },
        fail() {
          wx.showToast({
            title: '获取信息失败',
            image: "none"
          })
        },
      })
      return
    }
    this.getinfo(data)
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
    if (app.globalData.isUpdataDrugs) {
      this.load()
    }
    if (app.globalData.ispush) {
      var data = {
        number: app.globalData.mobile
      }
      this.getinfo(data)
    }
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