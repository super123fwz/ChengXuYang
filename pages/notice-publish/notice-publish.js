// pages/notice-publish/notice-publish.js
const api = require('../../utils/requestutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 200, //限制最大输入字符数
    min: 0, //限制最小输入字符数
    content: ""
  },
  getValueLength: function (e) {
    // console.log(e)
    let value = e.detail.value
    let len = parseInt(value.length)
    // 最少字数限制
    if (len <= this.data.min)
      this.setData({
        minWord: ""
      })
    else if (len > this.data.min)
      this.setData({
        minWord: " "
      })

    //最多字数限制
    if (len > 200) return;
    this.setData({
      currentWordNumber: len //当前字数 
    })
    this.setData({
      content: e.detail.value
    })

  },

  submitBt: function (e) {},
  getDate: function () {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);

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
    var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    //秒  
    var s = date.getSeconds();
    // return Y + "-" + M + "-" + D + "  " + h + ":" + m
    return timestamp

  },
  submitBt: function () {
    var data = {
      time: this.getDate(),
      context: this.data.content
    }
    if (!data.context) {
      wx.showToast({
        title: '输入不能为空',
        icon: "error"
      })
      return
    }
    wx.showModal({
      title: '提示',
      content: '确认发布',
      success(res) {
        if (res.confirm) {
          api.userActionAddNotice(data).then(res => {
            if (res.data.message == "成功") {
              wx.navigateBack({
                delta: 1,
              })
            }
          }).catch(err => {})
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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