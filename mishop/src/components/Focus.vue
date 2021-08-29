<template>
   <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in images" :key="item.id">
                <a href="#">
                    <img :src="$global.imgURL+item.imgdir+'/'+item.image" alt="">
                </a>
            </div>
          
        </div>
        
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css"
export default {
    props: 
        ['images']
    ,
    updated() {
         new Swiper('.swiper-container', {
            speed:1000,
            loop: true, 
            autoplay:{
                delay:2000
            },
            pagination: {
                el: '.swiper-pagination',
            }
        });
    },
}
</script>

<style>
    .swiper-container img{
        width: 100%;
    }
</style>
