// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: [{
        data: "在使用fragment的路上也是呕心沥血，在此，对Fragment的各个重要的使用细节，问题，和使用场景，做详细总结分析，本篇幅不会对Fragemnt的基本使用，生命周期等作概括介绍"
      }, {
        data: "在使用fragment的路上也是呕心沥血，在此，对Fragment的各个重要的使用细节，问题，和使用场景，做详细总结分析，本篇幅不会对Fragemnt的基本使用，生命周期等作概括介绍"
      },
      {
        data: "在使用fragment的路上也是呕心沥血，在此，对Fragment的各个重要的使用细节，问题，和使用场景，做详细总结分析，本篇幅不会对Fragemnt的基本使用，生命周期等作概括介绍"
      }, {
        data: "在使用fragment的路上也是呕心沥血，在此，对Fragment的各个重要的使用细节，问题，和使用场景，做详细总结分析，本篇幅不会对Fragemnt的基本使用，生命周期等作概括介绍"
      }
    ],
    time: null
  },
  publish: function () {
    wx.navigateTo({
      url: '/pages/notice-publish/notice-publish',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);

    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours());
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();
    this.setData({
      time: Y + "-" + M + "-" + D + "  " + h + ":" + m
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