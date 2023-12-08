// pages/personalPage/personalPage.js
Page({
  // 已接收漂流瓶的展开和隐藏
  data:{
    showIndex_reply:0,
    showIndex_get:0,
    array_get:false,
    array_reply:false,
    array_reply_tag:false,
    array_get_tag:false,
    showIndex_get_top:0,
    showIndex_reply_sort:0,
  },
  tap_db_get:function(e){
    if(e.currentTarget.dataset.index != this.data.showIndex_get){
      this.setData({
        showIndex_get:e.currentTarget.dataset.index,
        array_get:true
      })
      console.log(this.data.showIndex_get),
      console.log(e.currentTarget.dataset.index)
    }
    else{
      this.setData({
        showIndex_get:0,
      })
      console.log(this.data.showIndex_get)
    }
  },
  tap_db_reply:function(e){
    if(e.currentTarget.dataset.index != this.data.showIndex_reply){
      this.setData({
        showIndex_reply:e.currentTarget.dataset.index,
        array_reply:true
      })
      console.log(this.data.showIndex_reply),
      console.log(e.currentTarget.dataset.index)
    }
    else{
      this.setData({
        showIndex_reply:0,
      })
      console.log(this.data.showIndex_reply)
    }
  },
  tap_db_get_tag:function(e){
    if(e.currentTarget.dataset.index != this.data.showIndex_get_tag){
      this.setData({
        showIndex_get_tag:e.currentTarget.dataset.index,
        array_get_tag:true
      })
      console.log(this.data.showIndex_get_tag),
      console.log(e.currentTarget.dataset.index)
    }
    else{
      this.setData({
        showIndex_get_tag:0,
      })
      console.log(this.data.showIndex_get_tag)
    }
  },
  tap_db_get_sort:function(e){
    if(e.currentTarget.dataset.index != this.data.showIndex_get_top){
      this.setData({
        showIndex_get_top:e.currentTarget.dataset.index
      })
      console.log(this.data.showIndex_get_top),
      console.log(e.currentTarget.dataset.index)
    }
    else{
      this.setData({
        showIndex_get_top:0,
      })
      console.log(this.data.showIndex_get_top)
    }
  },
  tap_db_reply_sort:function(e){
    if(e.currentTarget.dataset.index != this.data.showIndex_reply_sort){
      this.setData({
        showIndex_reply_sort:e.currentTarget.dataset.index
      })
      console.log(this.data.showIndex_reply_sort),
      console.log(e.currentTarget.dataset.index)
    }
    else{
      this.setData({
        showIndex_reply_sort:0,
      })
      console.log(this.data.showIndex_reply_sort)
    }
  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})