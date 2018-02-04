// component/filter/filter.js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
  },
  data: {
    // 这里是一些组件内部数据
    selectedIndex: null,
    menus: [{
      name: '区域',
      tabs: []
    },
    {
      name: '方式',
      tabs: []
    },
    {
      name: '价格',
      tabs: []
    },
    {
      name: '更多',
      tabs: []
    }]
  },
  methods: {
    openFilter(e) {
      this.setData({
        selectedIndex: e.currentTarget.dataset.index
      })
    }
  }
})