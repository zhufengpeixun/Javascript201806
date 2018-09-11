<template id="div">
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjia-xue"></i>
        <span>添加</span>
      </router-link>
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
        computed: {},
        // .vue 会默认讲template中结构插入到导出的这个对象中；
    }
</script>

<style scoped lang="less">
  .footer{
      position: fixed;
      width:100%;
      bottom:0;
      display: flex;
       border-top:1px solid #ccc;
      background: white;
       z-index:100;
      a{
        display: flex;
        /*每个a占相同的比例*/
        flex:1;
        flex-direction: column;
        font-size: 18px;
        align-items: center;
        color:yellowgreen;
      }
       /*点击的路由对应的会有class: router-link-active*/
      .router-link-active{
        color:red;
      }
    }

  /*
  flex-direction: column;  上下布局
  align-items: center; 水平居中
  */

  .iconfont{
    font-size: 25px;
  }

</style>
