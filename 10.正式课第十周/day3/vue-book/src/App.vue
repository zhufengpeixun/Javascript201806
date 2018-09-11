<template>
  <div id="app">
    <!--把底部的导航抽离一个组件出来；-->
    <Tab></Tab>
    <!--这个router-view是用来显示components中的页面的组件-->


    <router-view></router-view>
  </div>
</template>
<script>
  // App.vue 这个组件不会销毁；
  import Tab from "./base/Tab.vue";
  export default {
    name: 'App',
    components:{
        Tab
    }
  }
</script>

<style>
  /*如果是公共样式，最好写在App.vue 中*/
  *{
    margin:0;
    padding:0;
  }
  ul li{
    list-style:none
  }
  a{
    text-decoration: none;
  }
  /*公共的样式*/
  .content{
    position: absolute;
    top:40px;
    width:100%;
    bottom:50px;
  }
</style>
