<template>
    <div>
        <Myheader>首页</Myheader>
        <div class="content">
          <!--内容区域；-->
            <Swiper :sliders="sliders"></Swiper>
            <div class="container">
              <h2>热门图书</h2>
              <ul>
                <li v-for="item in hotBooks">
                  <img :src="item.bookCover" alt="">
                  <b>{{item.bookName}}</b>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // 默认导出一个对象
    import Myheader  from "../base/Myheader.vue";
    import Swiper from "../base/Swiper.vue";
    import {getSlider,getHot}  from  "../api/index.js";
    export default {
        data(){
            return {
                sliders:[],
                hotBooks:[]
            }
        },
        created(){
            /*getSlider().then(function (data) {
              console.log(data);
            })*/
            //  async  await;
          this.slide();
          this.getHotBook();
        },
        methods: {
            // async  用来处理异步的请求结果；promise；
            async slide(){
                this.sliders = await getSlider();
            },
            async  getHotBook(){
                this.hotBooks = await getHot();
                console.log(this.hotBooks);
            }
        },
        components: {Myheader,Swiper},
        computed: {}
    }
</script>

<style scoped>
  .container{
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .container h2{
    padding-left:30px;
  }
  .container ul li{
    margin-top:20px;
    width:50%;
    float:left;
    margin-bottom: 20px;
  }
  .container ul li img{
    display: block;
  }
  .container ul li b{
    display: block;
    padding-left:20px;
  }

</style>
