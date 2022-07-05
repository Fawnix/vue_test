// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue生产提示
import vueResource from 'vue-resource'
// 引入store
import store from './store/index'

Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)

// 创建vm
new Vue({
    el:'#app',
    render: h=>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus=this
    }
})