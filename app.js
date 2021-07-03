// 打开小程序的时候，会先执行app.js，在这里调用App方法
// 注册小程序示例

/**
 * 注册App时，我们一般会做什么
 *   1.判断小程序的进入场景
 *       + 群聊会话中打开
 *       + 小程序列表中打开
 *       + 微信扫一扫打开
 *       + 另一个小程序打开
 *       + 搜索小程序中打开
 *       + ... 
 *   2.监听生命周期函数，在生命周期函数中执行对应的业务逻辑
 *       + onLaunch
 *       + onShow
 *       + onHide
 *       + onError
 *       + ...
 *   3.因为App()实例只有一个，并且是全局共享的（单例对象），所以可以将一些共享数据放在这里
 */

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log('打开App', options);
    // 可以发请求、获取用户信息等操作，但是一般不在发送需要大量数据的请求
    // console.log(aaaa)

    /**
     * 获取用户信息的方式
     *   1.wx.getUserInfo  （不推荐使用，后期会被废除）
     *   2.使用 <open-data> 组件   通过这个方式只能是在页面中展示，js不能获取到，也就不能传递给服务器了
     *   3.通过按钮 <button>授权登录</button> 获取，其中button固定属性有 open-type="getUserInfo"  bindgetuserinfo="事件名"
     */
    wx.getUserInfo({
      success:function(res){
        // console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log('我点开了', options);
    // options.scene  可以获取到小程序的进入场景

    // 1.判断小程序的进入场景
    switch(options.scene) {
      case 1001:
        // 发现栏进入
        break;
      case 1011:
        // 扫码进入
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log('我隐藏了')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.dir(msg)
    console.log('出错啦', msg)
  },


  /**
   * 当小程序进行页面跳转，但是没有找到对应的页面时触发
   */
  onPageNotFound: function(){

  },

  globalData: {
    // 定义全局共享的数据
    name: '全局共享',
    title: '页面中通过getApp方法获取这个整个App实例'
  }
})
