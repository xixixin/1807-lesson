// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notelist:[
      {
        title:'今天六一了',
        content:'明天十一了'
      } 
    ]
  },
  toAdd(){
    //去添加页的事件
    wx.navigateTo({
      url: '../add/add',
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
    let notelist = wx.getStorageSync("notelist") || []
    // console.log(notelist);
    this.setData({
      notelist:notelist
    })
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