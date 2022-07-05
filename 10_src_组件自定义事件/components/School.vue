<template>
  <div class="School">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="sendSchoolName">点击把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京'
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
  .School{
    background-color: aqua;
  }
</style>