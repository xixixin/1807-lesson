// pages/ajaxdom/ajaxdom.js
import { fetchdata } from '../../utils/util.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    val: '',
    searchList: [] //搜素列表的数据
  },
  //input的val的值改变的事件
  tosearch(e) {
    let sval = e.detail.value
    if (sval == '') {
      this.setData({
        searchList: []
      })
      return
    }
    this.setData({
      val: sval
    })
    this.searchajax()
  },
  searchajax() {
    // 百度搜素关键词 一直输入不可能一直搜素 保证在一定的时间内 支触发一次
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      let ajaxurl =
        'https://www.easy-mock.com/mock/5cc0186b3800c07a52929f6b/shop/list '
      let data = {
        wd: this.data.val
      }
      fetchdata(
        'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=a',
        data
      ).then(res => {
        let num = data.wd.length
        let udata = res.slice(18 + num, -3)
        udata = JSON.parse(udata)
        this.setData({
          searchList: udata
        })
      })
    }, 500)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let ajaxurl =
      'https://www.easy-mock.com/mock/5cc0186b3800c07a52929f6b/shop/list'

    let data = fetchdata(ajaxurl).then(data => {

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
