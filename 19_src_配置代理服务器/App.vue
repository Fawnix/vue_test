<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取车辆信息</button>
</div>
</template>

<script>
import axios from 'axios'
  export default {
      name:'App',
      methods:{
        getStudents(){
          axios.get('http://localhost:8084/atguigu/students').then(
            //response.data是成功了带来的数据
            response=>{
              console.log('请求成功了',response.data);
            },
            //error.message是失败的原因
            error=>{
              console.log('请求失败了',error.message);
            }
          )
      },
      getCars(){
          axios.get('http://localhost:8084/demo/cars').then(
            //response.data是成功了带来的数据
            response=>{
              console.log('请求成功了',response.data);
            },
            //error.message是失败的原因
            error=>{
              console.log('请求失败了',error.message);
            }
          )
        }
      },
  }
</script>
