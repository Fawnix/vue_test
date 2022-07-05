// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
// 引入路由组件
import About from "../pages/About.vue"
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露router实例对象，去管理一组一组的路由器规则
const router = new VueRouter({
    routes: [
        {
            name:'guanyu',
            path: '/about',
            component: About,
            // meta里面装的是程序员自定义的代码，isAuth是判断是否鉴权
            meta: { isAuth: true, title:'关于'},
        },
        {
            name:'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页' },
            children: [
                {
                    name:'xiaoxi',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true,title: '新闻'},
                    // 独享路由守卫只有前置没有后置，但全局后置路由守卫可以用
                    /* beforeEnter:(to,from,next)=>{
                            if (to.meta.isAuth) {//判断是否需要鉴权
                                if (localStorage.getItem('school') === 'atguigu') {
                                    next()
                                } else {
                                    alert('学校名不对，无权限查看!')
                                }
                            } else {
                                next()
                            }
                    } */
                },
                {
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children:[
                        {
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true,title: '详情' },
// props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                        // props:{a:1,b:'hello'}

// props的第二种写法，值为布尔值,若布尔值为真就会把该路由组件收到的所有params参数以props的形式传给Detail组件
                        // props:true

// props的第三种写法，值为函数
                        props($route){
                            return { 
                                id: $route.query.id,
                                title: $route.query.title
                            }
                        }
                        }
                    ]
                }
            ]
        }
    ]
})
// 全局前置路由守卫——每次路由切换之前被调用，初始化的时候被调用  beforeEach：在每一次切换路由之前。如果不用next就一直不能往下走了
/* router.beforeEach((to,from,next)=>{
    // if(to.path==='/home/news'||to.path==='/home/message'){
    if(to.meta.isAuth){//判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        }else{
            alert('学校名不对，无权限查看!')
        }
    }else{
            next()
        }
}) */

// 全局后置守卫：初始化是执行，每次路由切换后执行
/* router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from);
    document.title = to.meta.title || '硅谷系统'//修改网页的title
}) */
export default router