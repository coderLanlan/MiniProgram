// custom_components/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 10,
    arr: ['衣服', '裤子', '鞋子', '帽子']
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

  },
  handeladd(e){
    console.log(e.detail)
    // 通过 e.detail 获取组件自定义事件handeladd床传递的参数
    this.setData({
      count: this.data.count + 1
    })
  },
  handelclick(e) {
    console.log(e.detail);
  },

  // 修改组件内部的数据
  handlenum(){
    // 获取组件对象：selectComponent(选择器);
    const my_event = this.selectComponent(".my_event");


    // 最终目的：修改组件 my-event 中的num值
    console.log(my_event)
    // 方法一：直接通过 组件对象.setData 修改组件内部的数据（不推荐）
    my_event.setData({
      num: my_event.data.num+1
    });


    // 方法二：通过调用 组件对象的某个方法实现修改(组件暴露的方法是下载组件的methods中)
    my_event.changenum(10);
  }
})