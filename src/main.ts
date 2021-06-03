import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Table, Card, Button, Modal } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import directivePlug from './directive'
import lazyLoad from './directive/lazyLoad'
import Money from './directive/money'

import {
  Copy,
  TableScroll,
  ClickOutside,
  ScrollTo,
  Debounce,
  WaterMark
} from 'vue3-directive-npm'

// 图片懒加载

createApp(App).use(store).use(router)
.use(directivePlug)
.use(Copy)
.use(WaterMark)
.use(lazyLoad)
.use(Money)
.use(TableScroll)
.use(ClickOutside)
.use(Table)
.use(Card)
.use(Button)
.use(Modal)
.use(ScrollTo)
.use(Debounce)
.mount('#app')