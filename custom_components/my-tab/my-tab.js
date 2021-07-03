// custom_components/my-tab/my-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr: {
      type: Array,
      value: []
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle(e) {
      console.log(this)
      // 1.获取到传递的数据index
      let  index = e.currentTarget.dataset.index;

      // 2.设置 current的值
      this.setData({
        current: index
      });

      // 通知页面内部的点击事件
      this.triggerEvent('itemclick', {index: index, title: this.properties.arr[index]})
    }
  }
})
