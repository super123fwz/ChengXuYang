// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    animated: true
  },
  mineInfo: function () {
    wx.navigateTo({
      url: '/pages/mine-info/mine-info',
    })
  },
  permission:function(){
    wx.navigateTo({
      url: '/pages/permission/permission',
    })
  },
  managingPeople:function(){
    wx.navigateTo({
      url: '/pages/managing-people/managing-people',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'userInfo',
      success (res) {
        if(res.data){
          that.setData({
            userInfo: res.data
          })
        }
      }
    })
  },
  push:function(){
    wx.setStorage({
      key: "userInfo",
      data: null,
      success:(e)=>{
        wx.redirectTo({
          url: '/pages/logs/logs',
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