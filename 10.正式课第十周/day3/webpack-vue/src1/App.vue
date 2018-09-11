<template>
    <div @click="fn">
        {{msg}}
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {msg:"点我"}
        },
        methods: {
            fn(){
                console.log("快下课了")
            }
        },
        components: {},
        computed: {}
    }
</script>
<!--scoped ： 这是一个私有的样式； 不加就是全局的样式；-->
<style scoped>
    div{
        color:red;
        font-size: 50px;
    }
</style>
