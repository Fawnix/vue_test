<template>
 <li>
    <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- 以下代码也能实现功能，但由于修改了props，有点违反原则，所以不推荐使用 -->
        <!-- <input type="checkbox" v-model="todo.done"> -->
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
</li>
</template>

<script>
export default {
    name:'UserItem',
    //声明接收todo对象
    props:['todo'],
    methods:{
      // 勾选or取消勾选
      handleCheck(id){
        // 通知APP组件将对应的todo对象的done值取反
        // this.checkTodo(id)
        this.$bus.$emit('checkAllTodo',id)
      },
      // 删除
      handleDelete(id){
        if(confirm('是否确定删除?')){
          // this.deleteTodo(id)
          this.$bus.$emit('deleteTodo',id)
        }
      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: antiquewhite;
}
li:hover button{
  display: block;
}
</style>