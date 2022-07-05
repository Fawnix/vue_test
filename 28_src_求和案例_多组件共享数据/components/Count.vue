<template>
<div>
    <h1>当前求和为：{{sum}}</h1>
	<h3>当前求和放大10倍为:{{bigSum}}</h3>
	<h3>我在{{school}}，学习{{subject}}</h3>
    <h3>下方组件的总人数是：{{personList.length}}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <!-- 如果increment后面不加小括号传的就是event -->
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
</div>
</template>

<script>
import { mapGetters, mapState,mapMutations,mapActions } from "vuex"
    export default {
        name:'Count',
        data() {
            return {
                n:1,//用户选择的数字
            }
        },
        computed:{
            // 借助mapState生成计算属性，从state中读取数据。(数组写法)
            ...mapState(['sum','school','subject','personList']),

            // ...mapGetters({bigSum:'bigSum'})
            ...mapGetters(['bigSum'])
        },
        methods:{
            // 以下借助mapMutations生成对应的方法，方法中会调用commit去联系Mutations(数组写法)
            ...mapMutations(['JIA','JIAN']),

            // 以下借助mapActions生成对应的方法，方法中会调用dispatch去联系ations(数组写法)
            ...mapActions(['jiaOdd','jiaWait']),
        },
        /* mounted() {
            const x=mapState({he:'sum',xuexiao:'school',xueke:'subject'})
            console.log(x);
        }, */
    }
</script>

<style>
button{
    margin-left: 10px;
}
</style>