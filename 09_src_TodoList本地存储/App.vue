<template>
  <div id="root">
  <div class="todo-container">
  <div class="todo-wrap">
      <UserHeader :addTodo="addTodo"/>
      <UserList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
      <UserFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
  </div>
</div>
</template>

<script>
import UserHeader from "./components/UserHeader.vue"
import UserList from './components/UserList.vue'
import UserFooter from "./components/UserFooter.vue"

    export default {
        name:'App',
        components:{UserHeader,UserList,UserFooter},
        data(){
        return{
          todos:JSON.parse(localStorage.getItem('todos'))||[]
      }
    },
    methods:{
      // 添加一个todo
      addTodo(todoObj){
        // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        this.todos.unshift(todoObj)
      },
      // 勾选或取消勾选一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id==id)todo.done=!todo.done
        })
      },
      // 删除一个todo
      deleteTodo(id){
        this.todos=this.todos.filter(todo=> todo.id!==id)
      },
      // 全选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done=done
        })
      },
      // 清除所有已经完成的todo
      clearAllTodo(){
        this.todos=this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    // 深度监视
    watch:{
      todos:{
        deep:true,
        handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
      }
    }
    }
</script>

<style>
body {
  background: #fff;
}

.btn {
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>