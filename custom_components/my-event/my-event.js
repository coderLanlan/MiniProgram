// custom_components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0
    }
  },
  externalClasses: [
    'my-title'
  ],

  /**
   * 组件的初始数据
   */
  data: {
    num: 3
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(e){
      this.triggerEvent('handeladd', {name: 'lyl', age: 19})
    },

    changenum(n) {
      // 这里的方法，页面都可以通过获取组件对象来实现调用
      console.log('调用组件内部的方法')
    }
  }
})
