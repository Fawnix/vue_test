// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入路由组件
import About from "../pages/About.vue"
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露router实例对象，去管理一组一组的路由器规则
export default new VueRouter({
    routes: [
        {
            name:'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail
                        }
                    ]
                }
            ]
        }
    ]
})