// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animateData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 创建一个动画的实例
    let animation = wx.createAnimation({
      duration: 1000, //动画的持续时间
      timingFunction: 'linear',//动画的效果
      delay: 100, //动画的延迟时间
      //动画的中心点     transformOrigi
    })

    // 需要把动画挂载到实例上面
    this.animation = animation;
    animation.rotate(360).scale(0.5).step()  //step表示这一步的动画已经定义完  必须加
    animation.rotate(0).scale(2).step()
    //把animation赋值给我们的动画对象 animateData
    setTimeout(() => {
      this.setData({
        // export  导出动画队列  如果不写export 无法进行下一次的动画操作
        animateData: animation.export()
      })
    }, 1000)

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