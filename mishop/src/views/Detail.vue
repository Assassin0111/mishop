<template>
  <div>
        <header>
            <div class="topbar">
                <div class="back" @click="$router.go(-1)">
                    <img src="../assets/images/icon-back.png" alt="">
                </div>
            </div>
            <focus :images="images" />
        </header>
        <main>
            <section class="goods">
                <p  class="price">
                    <b>
                        <span>&yen;&thinsp;</span>{{ goods.price }}
                    </b>
                    <span>
                        &yen;<del>{{ goods.market_price }}</del>
                    </span>
                </p>
                <p class="goodsname">
                    {{ goods.goodsname }}
                </p>             
            </section>         
        </main>
        <footer>
            <ul>
                <li>
                    <img src="../assets/images/icon-home.png" alt="">
                    <span>首页</span>
                </li>
                <li class="cart">
                    <img src="../assets/images/icon-cart.png" alt="">
                    <span>购物车</span>
                    <span class="cartnum" v-show="cartnum">{{ cartnum }}</span>
                </li>
                <li>
                    <a href="#" class="tocart" @click.prevent="popupVisible=true">加入购物车</a>
                    <a href="#" class="tobuy">立即购买</a>
                </li>
            </ul>
        </footer>

        <mt-popup v-model="popupVisible" position="bottom">
            <div class="good-info">
                <img :src="$global.imgURL + goods.imgdir + '/' + goods.image" alt="">
                <div>
                    <p  class="price">
                        <b>
                            <span>&yen;&thinsp;</span>{{ goods.price }}
                        </b>
                        <span>
                            &yen;<del>{{ goods.market_price }}</del>
                        </span>
                    </p>
                    <p class="goodsname">
                        {{ goods.goodsname }}
                    </p>             
                </div>
            </div>
            <div class="buynum">
                <div>
                    <b>购买数量</b>
                </div>
                <div class="goodsnum">
                    <b @click="decreace">-</b>
                    <span>{{ buynum }}</span>
                    <b @click="increace">+</b>
                </div>
            </div>
            <button @click="addToCart">确定</button>
            
            <span class="close" @click="popupVisible=false">&times;</span>
        </mt-popup>
  </div>
</template>

<script>
import Focus from '../components/Focus.vue'
export default {
    components:{
        Focus
    },
   async created(){
       let id = this.$route.params.id;
       this.id = id;
       let result = await this.axios.get('/goods/detail/'+id);
       if(result.code === 0){
           this.goods = result.data.goods;
           this.images = result.data.images;
       }

       // 获取购物车中该商品数量
       let mycart = localStorage.getItem('mycart');
       if(mycart){
           mycart = JSON.parse(mycart)
           if(mycart[id]){
               this.cartnum = mycart[id].buynum
           }
       }
    },
    data: function(){
        return {
            id: 1,
            goods: {},
            images: [],
            popupVisible: false,
            buynum: 1,
            cartnum: 0
        }
    },
    methods: {
        increace(){
            this.buynum = this.buynum < 10 ? this.buynum + 1 : 10
        },

         decreace(){
            this.buynum = this.buynum > 1 ? this.buynum - 1 : 1
        },

        // 添加商品到购物车
        addToCart(){
            //未登录时，写入localstorage 
            // 获取购物车信息
            let mycart = localStorage.getItem('mycart')
            mycart = mycart ? JSON.parse(mycart) : {} 

            // 判断购物车中是否有当前商品
            // 当前商品id
            let id = this.id;
            let thisGoods = mycart[id]
            if(thisGoods){
                // 更新购买数量
                thisGoods.buynum += this.buynum 
                mycart[id] = thisGoods
            }else{
                // 添加进购物车
                mycart[id] = { gid:id,buynum:this.buynum }
            }

            
            // 写入localstorage
            localStorage.setItem('mycart',JSON.stringify(mycart))
            // 更新cartnum
            this.cartnum =  mycart[id].buynum
            this.$toast({
                message: '成功加入购物车',
                iconClass: 'iconfont icon-duigou',
                className: 'icon-cart',
                duration: 1000
            });
            this.popupVisible = false;
        }
    },
}
</script>

<style lang="scss" scoped>

    .cart{
        position: relative;
        .cartnum{
            position: absolute;
            right:0;
            top: 0;
            width: 1.4em;
            height: 1.4em;
            text-align: center;
            line-height: 1.4em;
            background: rgba(orangered,.7);
            color:#fff;
            font-size: 12px;
            border-radius: 50%;
            
        }
    }
    .mint-popup{
        width: 100%;
        height: 240px;
        padding:25px 15px;
        background:#fff;
        border-radius: 15px 15px 0 0;
        .close{
            position: absolute;
            right:1em;
            top:1em;
            width: 1.5em;
            height: 1.5em;
            text-align: center;
            line-height: 1.5em;
            background: rgba(#ccc,.3);
            border-radius: 50%;
        }

        .good-info{
            display: flex;
            img{
                width: 80px;
            }

            b{
                font-size:18px;
            }

            .goodsname{
                font-size: 12px;
                font-weight: normal;
            }
        }

        .buynum{
            display: flex;
            justify-content: space-between;
            margin:20px 0;
            b{
                color:#000;
            }
            .goodsnum{
                display: flex;
                b{
                    font-size:22px
                }
                span{
                    padding: 5px 15px;
                    background: rgba(#ccc,.3);
                    margin:0 10px;
                    font-size: 16px;
                }
            }   
        }

        button{
            width: 100%;
            height: 40px;
            margin-top:10px;
            border-radius: 35px;
            border:0;
            outline: none;
            background: linear-gradient(45deg,#FF7D00,#FF5934);
            color:#fff;
        }
    }

    .topbar{
        z-index: 100;
        position: fixed;
        left:0;
        top:0;
        width: 100%;
        height: 1.8rem;
        background: transparent;
    }

    .back{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        
    }

    .back img{
        width: 1.6rem;
    }

    .swiper-container img{
        width: 100%;
    }

    .goods{
        padding:0.4rem 0.6rem;
    }

    .price b{
        font-size:1rem;
        color:#ff6700;
    }

    .price b span{
        font-size:0.64rem;
        display: inline-block;
        vertical-align: top;
    }

    .price span{
        font-size:0.48rem;
    }

    .goodsname{
        line-height: 2em;
        font-size: 0.64rem;
        font-weight: bold;
        color:#000;
    }

    footer{
        position: fixed;
        left:0;
        bottom:0;
        width: 100%;
        border-top:0.04rem solid #ddd;
    }
    footer ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 2.2rem;
    
    }

    footer li:nth-of-type(-n+2){
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size:0.48rem;
    }

    footer li:last-of-type{
        display: flex;
    }


    footer img{
        width: 1.2rem;
    }


    footer li:last-of-type a{
        padding:0.32rem 0.8rem;
        font-size:0.6rem;
        color:#fff;
    }
    footer .tocart{
        border-radius: 1rem 0  0 1rem;
        background: linear-gradient(90deg,#fdcf00,#fd9b00);
    }
    footer .tobuy{
        border-radius: 0 1rem  1rem   0;
        background: linear-gradient(90deg,#ff7310,#fe3f00);
    }
</style>