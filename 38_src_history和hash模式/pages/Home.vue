<template>
<div>
  <h2>我是Home的内容</h2>
  <div>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <!-- 如果不加include就无论输什么都会被缓存，没必要这样太多了,要缓存的那里的名字输入的是组件名！ -->
    <!-- 缓存一个路由组件 -->
    <!-- <keep-alive include="News"> -->

    <!-- 缓存多个路由组件 -->
    <keep-alive :include="['News','Message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</div>
</template>

<script>
export default {
    name:'Home',
}
</script>
