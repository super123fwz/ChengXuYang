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
    }]
  },
  drugsInfo: function () {
    wx.navigateTo({
      url: '../drugs-info/drugs-info',
    })
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
      this.setData({
        durgs: null
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    api.drugActionList().then(res => {
      var data = res.data
      console.log("data", data);
      this.setData({
        durgs: data.data
      })
    }).catch(err => {

    })
    // wx.getStorage({
    //   key: 'userInfo',
    //   success (res) {
    //     if(res.data){
    //       that.setData({
    //         durgs: that.data.durgs_list
    //       })
    //     }
    //   }
    // })
    // if (app.globalData.userInfo == null) {
    //   wx.navigateTo({
    //     url: '/pages/logs/logs',
    //   })
    //   this.setData({
    //     durgs: this.data.durgs_list
    //   })
    // }
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
    // if (app.globalData.userInfo == null) {
    //   wx.navigateTo({
    //     url: '/pages/logs/logs',
    //   })
    // }
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