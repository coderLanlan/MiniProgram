// custom_components/my-prop/my-prop.js
Component({
  
  // 接收外界传递的属性值（类似于vue中的props属性）
  properties: {
    // title: String // 这样写只能定义类型
    title : {
      type: String,
      value: '在js中设置默认值', // 如果不传，给其设置默认值
      observer(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },

  // 接收外界传递的样式名
  externalClasses: [
    'my-style'
  ],

  
  data: {

  },

  
  methods: {

  }
})
