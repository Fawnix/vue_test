<template>
  <div class="School">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京'
    }
  },
  mounted(){
    console.log('School');
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件，收到了数据',data);
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
  .School{
    background-color: aqua;
  }
</style>