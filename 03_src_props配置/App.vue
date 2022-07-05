<template>
  <div>
      <!-- v-bind绑定了之后就是返回里面那个表达式 -->
      <Student name='尚硅谷' sex='男' :age='18+1' />
  </div>
</template>

<script>
import Student from './components/Student.vue';
    export default {
        name:'App',
        components:{ Student },
    }
</script>

<style>

</style>