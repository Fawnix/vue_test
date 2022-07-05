<template>
<div class="container">
<Category title="游戏">
  <!-- 要让定义插槽的组件把数据传给插槽的使用者一定要在传入的结构的外侧用template标签将其包裹起来 -->
<template scope="atguigu">
  <ul>
    <li v-for="(g,index) in atguigu.game" :key="index">{{g}}</li>
  </ul>
</template>
</Category>

<Category title="游戏">
<!-- 下面这个是旧的写法 -->
<template scope="{game}">
  <ol>
    <li style="color:red" v-for="(g,index) in game" :key="index">{{g}}</li>
  </ol>
</template>
</Category>

<Category title="游戏">
  <!-- 下面这个是新的API -->
<template slot-scope="{game}">
  <h4 v-for="(g,index) in game" :key="index">{{g}}</h4>
</template>
</Category>
</div>
</template>

<script>
import Category from "./components/Category.vue"
  export default{
    name: 'App',
    components: {Category },
    data(){
      return{
				games:['红色警戒','穿越火线','劲舞团','超级玛丽']
      }
    }
}
</script>

<style scoped>
.container,.foot{
  display: flex;
  justify-content: space-around;
}
video,img{
  width: 100%;
}
h4{
  text-align: center;
}
</style>