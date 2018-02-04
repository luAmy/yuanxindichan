// component/copyright/copyright.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
  },
  data: {
    // 这里是一些组件内部数据
    keyword: ''
  },
  methods: {
    getKeyword(e) {
      this.setData({
        keyword: e.detail.value
      })
    },
    search() {
      this.triggerEvent('search', this.data.keyword);
    }
  }
})