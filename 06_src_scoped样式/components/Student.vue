<template>
  <div class="demo">
    <h2>学生姓名:{{ name }}</h2>
    <h2 class="qwe">学生性别:{{ sex }}</h2>
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
}
</script>

// 不写lang就默认是css
<style lang="less">
  .demo{
    background-color:hotpink;
  }
  .qwe{
    font-size: 40px;
  }
</style>
