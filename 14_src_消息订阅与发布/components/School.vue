<template>
  <div class="School">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京'
    }
  },
  mounted(){
    /* console.log('School');
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件，收到了数据',data);
    }) */
    // eslint-disable-next-line no-unused-vars
    this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
				console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    })
  },
  beforeDestroy(){
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
  .School{
    background-color: aqua;
  }
</style>