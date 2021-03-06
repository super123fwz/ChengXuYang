// pages/managing-people/managing-people.js
const api = require('../../utils/requestutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    employeeList: null
  },
  dele: function (e) {
    var number = {
      number: this.data.employeeList[e.target.dataset.id].number
    }
    wx.showModal({
      title: '提示',
      content: '确认删除该人员',
      success(res) {
        if (res.confirm) {
          api.employeeDel(number).then(res => {
            console.log("res", res)
          })
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
    this.setData({
      userInfoId: options.userInfoId
    })
    api.employeeActionList().then(res => {
      this.setData({
        employeeList: res.data.data
      })
    }).catch(err => {

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