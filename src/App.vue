<template>
  <div>
    <button>原生按钮</button>
    <input type="text" name="" id="">
    <atguigu-Row>
      <atguigu-Button>默认按钮</atguigu-Button>
      <atguigu-Button type="primary">主要按钮</atguigu-Button>
      <atguigu-Button type="success">成功按钮</atguigu-Button>
      <atguigu-Button type="info">信息按钮</atguigu-Button>
      <atguigu-Button type="warning">警告按钮</atguigu-Button>
      <atguigu-Button type="danger">危险按钮</atguigu-Button>
    </atguigu-Row>
    <atguigu-DatePicker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </atguigu-DatePicker>
    <atguigu-Row>
      <atguigu-Button icon="el-icon-search" circle></atguigu-Button>
      <atguigu-Button type="primary" icon="el-icon-edit" circle></atguigu-Button>
      <atguigu-Button type="success" icon="el-icon-check" circle></atguigu-Button>
      <atguigu-Button type="info" icon="el-icon-message" circle></atguigu-Button>
      <atguigu-Button type="warning" icon="el-icon-star-off" circle></atguigu-Button>
      <atguigu-Button type="danger" icon="el-icon-loading" circle></atguigu-Button>
    </atguigu-Row>
  </div>
</template>

<script>
	export default {
    name: "App",
}
</script>