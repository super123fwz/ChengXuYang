// pages/drugs-add/drugs-add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  bindinput: function (e) {
    var value=e.detail.value
    var drugs_info=this.data.drugs_info
    switch (e.dataset.type) {
      case "name":
        drugs_info.name=value
        break;
      case "code":
        drugs_info.code=value
        break;
      case "producer":
        drugs_info.producer=value
        break;
      case "buy_price":
        drugs_info.buy_price=value
        break;
      case "sell_price":
        drugs_info.sell_price=value
        break;
      default:
        break;
    }
    this.setData({
      drugs_info:drugs_info
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.drugs_info) {
      this.setData({
        drugs_info: JSON.parse(options.drugs_info)
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