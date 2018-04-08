var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_key:postsData.postList
      })
  },

  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url:'index-detail/index-detail?id=' + postId
    })
  },

  // 在swiper-item下的三个image标签内加上处理函数 catchtap="onSwiperItemTap"
  // onSwiperItemTap: function(event) {
  //   var postId = event.currentTarget.dataset.postid;
  //   wx.navigateTo({
  //     url: 'index-detail/index-detail?id=' + postId
  //   })
  // },

  // 事件代理,只需在swiper标签添加一个事件处理函数即可
  onSwiper: function(event) {
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'index-detail/index-detail?id=' + postId
    })
  }
})