<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>当前求和为:{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">点击把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name:'张三',
      sex:'男',
      number:0
    }
  },
  methods:{
    add(){
      console.log('add回调被调用了');
      this.number++
    },
    sendStudentName(){
      // 触发Student组件实例身上的atguigu事件
      this.$emit('atguigu',this.name,666,888,990)
      // this.$emit('demo')
    },
    unbind(){
      this.$off('atguigu')//解绑一个自定义事件
      // this.$off(['atguigu','demo'])//解绑多个自定义事件
      // this.$off()//解绑所有自定义事件
    },
    /* death(){
      this.$destroy()//销毁了当前的Student组件实例,销毁后所以Student实例的自定义事件全都不奏效了。但对原生的代码不奏效，例如number++
    } */
  },
}
</script>

// 不写lang就默认是css
<style lang="less">
  .student{
    background-color:hotpink;
  }
</style>
