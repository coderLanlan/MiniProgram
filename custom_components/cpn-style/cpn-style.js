// custom_components/cpn-style/cpn-style.js
Component({
  options: {
    // 该属性是设置样式隔离的
    // isolated：表示启用样式隔离，即组件内的class和页面内的class不会互相影响
    // apply-shared：表示页面的class会影响组件的，但是组件的class不会影响页面的。注意：这里指的影响是指，假如组件内的class样式中对于某个样式属性没有进行设置，那么就会使用页面的class的相同样式属性的值，如果组件内class已经设置过了，页面也设置了，那么还是以组件自己设置的为主
    // shared：作用跟 apply-shared 相反，是组件内的class样式影响页面的calss样式
    // styleIsolation: 'isolated'

    // styleIsolation: 'apply-shared'

    styleIsolation: 'shared'
  }
})
