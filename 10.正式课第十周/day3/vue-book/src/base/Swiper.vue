<template>
  <swiper :options="swiperOption"  ref="mySwiper">
    <!-- slides -->
    <!--组件循环需要加上key属性；-->
    <swiper-slide v-for="(item,key) in  sliders" :key="key">
       <img :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
    // 默认导出一个对象
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'carrousel',
        props:['sliders'],
        data(){
            return {
              swiperOption:{
                  autoplay: 3000,
                  pagination: '.swiper-pagination',
              }
            }
        },
        methods: {},
        components: {swiper,swiperSlide},
        computed: {}
    }
</script>

<style scoped>
  img{
    width:100%;
  }
</style>
