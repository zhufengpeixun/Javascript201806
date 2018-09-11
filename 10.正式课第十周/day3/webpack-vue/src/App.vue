<template>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/list">列表</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped>
</style>
