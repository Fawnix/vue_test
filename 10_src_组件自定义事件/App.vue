<template>
  <div class="app">
      <h1>{{msg}}, 学生姓名是:{{studentName}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName" />

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第一种写法：使用@或v-on)-->
      <!-- <Student @atguigu="getStudentName" @demo="m1" /> -->
      <!-- <Student @atguigu.once="getStudentName" /> -->

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第二种写法：使用ref)-->
      <Student ref="student" @click.native="show"/>
      <!-- <Student ref="student" @click.native="show"/> -->
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{ School,Student},
        data(){
            return{
                msg:'你好啊',
                studentName:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('APP收到了学校名',name);
            },
            getStudentName(name,...params){
                console.log('App收到了学生名',name,params);
                this.studentName=name
            },
            m1(){
                console.log('demo事件被触发了');
            },
            show(){
				alert(123)
			}
        },
        mounted(){
            // $on的意思就是当……的时候
            this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件

            // 可以搞个定时器让它缓3秒再执行
            /* setTimeout(()=>{
                this.$refs.student.$on('atguigu',this.getStudentName)
            },3000) */

            // 如果想让这个自定义事件被触发一次后就不能再触发了可以用$once
            // this.$refs.student.$once('atguigu',this.getStudentName)//绑定自定义事件（一次性)
        }
    }
</script>

<style>
.app{
    background-color: rgb(200, 200, 200);
}
</style>