<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition-group
       appear
       name="animate__animated animate__bounce"
       enter-active-class="animate__rubberBand"
       leave-active-class="animate__backOutRight"
       >
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">我累了</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: antiquewhite;
}
</style>