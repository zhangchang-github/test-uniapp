import App from './App'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

// #ifndef VUE3
import Vue from 'vue'

import home from './pages/home/home.vue'
Vue.component('home',home)

import photo from './pages/photo/photo.vue'
Vue.component('photo',photo)

import play from './pages/play/play.vue'
Vue.component('play',play)

import mine from './pages/mine/mine.vue'
Vue.component('mine',mine)

import collection from './pages/components/collection.vue'
Vue.component('collection',collection)

import location from './pages/components/location.vue'
Vue.component('location',location)

import setting from './pages/components/setting.vue'
Vue.component('setting',setting)

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif