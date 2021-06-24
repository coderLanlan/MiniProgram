// 每个页面的js文件必须调用Page方法，并且传递一个对象

// 通过Page方法称为注册一个页面，每个页面的js文件中都要调用这个
Page({

  /**
   * 页面的初始数据：类似于vue项目中每个组件的data属性
   */
  data: {
    title: '大写的难过',
    arr: [{
      id:1,
      name: '哈哈'
    }, {
      id: 2,
      name: '呵呵'
    }, {
      id: 3,
      name: '嗯嗯'
    }],
    cont: 0
  },
  // 自定义函数
  fn(){
    // 函数中的this是当前页面实例，可以通过 this.data.xxx 访问到被定义的变量
    // console.log(this, '你点击了我');

   /*  this.data.cont += 1; // 小程序是单向数据绑定，不像vue是双向数据绑定。小程序中直接更改变量的值，页面是不会刷新的（类似于react）
    console.log(this.data.cont); // 数据是改变了的 */

    // 想要页面也刷新，需要调用 setData （跟react一样）
    this.setData({
      cont: this.data.cont += 1
    });
    // console.log(aaaa)
  },

  // 通过按钮获取用户信息
  getUserInfo(e){
    console.log(e)
    // e.detail.userInfo 就是获取到的用户信息
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