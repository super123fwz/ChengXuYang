// pages/drugs-info/drugs-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    drugs_info:{
      id:1,
      name:"阿莫西林",
      code:1241245125,
      producer:"西南制药",
      buy_price:30,
      sell_price:32,
      retail_price:100
    },
  },
  bindblur: function (event) {
    var num = event.detail.value
    if (num == null || num == "") {
      this.setData({
        number: 0
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
  modify:function(){
    wx.navigateTo({
      url: '/pages/drugs-add/drugs-add?drugs_info='+JSON.stringify(this.data.drugs_info),
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