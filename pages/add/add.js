// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setTitle(e){
    // console.log(e.detail.value)
    this.title = e.detail.value;
  },
  setContent(e){
    this.content = e.detail.value;
  },
  getMsg(){
    if(!this.title || !this.content){
      wx.showModal({
        title: '提示',
        content:'标题或者内容不能为空'
      })
      return
    }
    //先获取缓存 如果没有设置成空数组  Sync表示同步
    let notelist = wx.getStorageSync('notelist') || []
    notelist.push({title:this.title,content:this.content})
    //再把数组存到缓存里
    wx.setStorageSync("notelist",notelist)
    wx.navigateBack({})
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