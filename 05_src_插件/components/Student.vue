<template>
  <div class="student">
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  },
  // mixins:[mixin,mixin2]
}
</script>
