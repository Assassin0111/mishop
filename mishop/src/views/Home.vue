<template>
  <div class="home">
          <!-- 头部开始 -->
    <header>
        <div class="search-banner">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <div class="search">
                <input type="text" name="search" placeholder="搜索商品名称">
            </div>
            <div class="login">
                <a href="#">
                    <img src="../assets/images/user.png" alt="登录">
                </a>
            </div>
        </div>
        <nav>
            <ul>
                <li class="active">
                    <a href="#">推荐</a>
                </li>
                <li>
                    <a href="#">手机</a>
                </li>
                <li>
                    <a href="#">智能</a>
                </li>
                <li>
                    <a href="#">电视</a>
                </li>
                <li>
                    <a href="#">家电</a>
                </li>
                <li>
                    <a href="#">笔记本</a>
                </li>
                <li class="more">
                    <img src="../assets/images/arrow.png" alt="arrow">
                </li>
            </ul>
        </nav>
    </header>

    <!-- 主体内容开始 -->
    <main>
        <section class="focus">
          <focus :images="images" />
        </section>
        <section class="menu">
           <ul>
               <li>
                    <a href="#">
                        <img src="../assets/images/menu1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu2.png" alt="">
                    </a>
                </li>
               
                <li>
                    <a href="#">
                        <img src="../assets/images/menu3.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu4.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu5.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu6.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu7.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu8.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/menu9.png" alt="">
                    </a>
                </li>
             
                <li>
                    <a href="#">
                        <img src="../assets/images/menu10.png" alt="">
                    </a>
                </li>
           </ul>
        </section>
        <section class="ad">
            <div class="left">
                <a href="#">
                    <img src="../assets/images/ad1.jpg" alt="">
                </a>  
            </div>
            <div class="right">
                <a href="#">
                    <img src="../assets/images/ad2.jpg" alt="">
                </a>
                <a href="#">
                    <img src="../assets/images/ad3.jpg" alt="">
                </a>
            </div>
        </section>
        <section class="hot">
            <a href="#">
                <img src="../assets/images/ad4.jpg" alt="">
            </a>
        </section>
        <section class="goods">
            <div v-for="item in goods" :key="item.id">
               <a :href="'/#/detail/'+item.id">
                <!-- <router-link :to="'/detail/'+item.id"> -->
                    <img v-lazy="$global.imgURL +item.imgdir+'/'+item.image" alt="">
                    <p>{{ item.goodsname }}</p>
                    <p>一亿像素夜景相机，120Hz六档变速高刷屏</p>
                    <p>
                        &yen; <span>{{ item.price }}</span> 起        
                    </p>
                    <button type="button">立即购买</button>
               <!-- </router-link> -->
               </a>
            </div>
           
        </section> 
    </main>
  </div>
</template>

<script>
import Focus from '../components/Focus.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Focus
  },
  data: function(){
      return {
          goods: [],
          images: []
            
          
      }
  },
  async created() {
      
      // 获取商品数据
      const result = await this.axios.get('/goods');
      if(result.code === 0){
            this.goods = result.data
      }

     // 获取广告数据
     const result2 = await this.axios.get('/ad')
     if(result2.code === 0){
            this.images = result2.data
      }


     // 获取分类数据   
     const result3 = await this.axios.get('/category/0',{params:{limit:5}});
     
  }
}
</script>


<style lang="scss" scoped>
  header {
      z-index: 100;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3rem;
      background: #f2f2f2;
  }

  main {
      margin: 3rem 0;
  }

  .search-banner {
      display: flex;
      height: 1.8rem;
      justify-content: space-around;
      align-items: center;
  }

  .logo,
  .login {
      width: 2rem;
      text-align: center;
  }

  .logo img {
      width: 1rem;
  }

  .login img {
      width: 0.88rem;
  }

  .search {
      flex-grow: 1;
      color: red;

  }
  .search input {
      width: 100%;
      padding: 0.32rem;
      border: 0.04rem solid #e1e1e1;
      border-radius: 0.08rem;
      font-size: 0.6rem;
      outline: none;
      text-indent: 1rem;
      background: #fff url('../assets/images/zoom.png') no-repeat 0.2rem center;
      background-size: 0.88rem;
  }

  input::-webkit-input-placeholder {
      color: #bbb;
  }

  nav ul {
      display: flex;
      height: 1.2rem;
      justify-content: space-around;
  }
  nav li {
      height: 100%;
      line-height: 1.2rem;
  }

  nav ul a {
      color: #777;
      font-size: 0.54rem;
  }

  nav li.more img {
      width: 1rem;
      vertical-align: middle;
  }

  nav li.active {
      border-bottom: 0.08rem solid orangered;
  }

  nav li.active a {
      color: orangered;
  }

  section.focus img {
      width: 100%;
      height: 7.48rem;
  }

  section.menu ul {
      display: flex;
      flex-wrap: wrap;
      box-shadow: 0 0 0.06rem rgba(100, 100, 100, 0.3);

  }

  section.menu li {
      width: 20%;
      text-align: center;
  }

  section.menu ul img {
      width: 100%;
  }

  section.ad {
      display: flex;
      justify-content: space-between;
  }

  section.ad div {
      width: calc(50% - 2px);

  }
  section.ad img {
      width: 100%;
  }


  section.hot img {
      width: 100%;
  }

  section.goods {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
  }

  section.goods div a {
      display: flex;
      width: 7.2rem;
      margin: 0.4rem 0;
      flex-direction: column;
      align-items: center;
      color: #999;
      background: #fff;
  }

  section.goods img {
      width: 100%;
  }

  section.goods p {
      width: 85%;
      line-height: 1.5em;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
  }

  section.goods a p:first-of-type {
      font-size: 0.56rem;
      color: #333;
      margin-top: 0.4rem;
  }

  section.goods a p:nth-of-type(2) {
      font-size: 0.48rem;
  }

  section.goods a p:last-of-type {
      font-size: 0.52rem;
      color: #e2625b;
  }

  section.goods a p:last-of-type span {
      font-size: 0.56rem;
  }

  section.goods button {
      padding: 0.2rem 0.88rem;
      background: #e2625b;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 0.12rem;
  }

</style>
