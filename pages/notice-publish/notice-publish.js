// pages/notice-publish/notice-publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 200, //限制最大输入字符数
    min: 0,  //限制最小输入字符数
    content:""
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
    this.setData({content:e.detail.value})

  },
  
  submitBt :function(e){
  
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