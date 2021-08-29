<template>
     <footer>
        <ul>
            <li class="active">
                <a href="#">
                    <img src="../assets/images/icon11.png" alt="">
                    <span>首页</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/images/icon2.png" alt="">
                    <span>分类</span>
                </a>
            </li>
           
            <li>
                <a href="#">
                    <img src="../assets/images/icon4.png" alt="">
                    <span>购物车</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../assets/images/icon5.png" alt="">
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'FooterNav',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #fff;
      box-shadow: 0 0.04rem 0.2rem rgba(100, 100, 100, 0.3);
  }

  footer ul {
      height: 2.08rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  footer li a {
      display: flex;
      flex-direction: column;
      font-size: 0.48rem;
      color: #999;
  }

  footer li.active a {
      color: orangered;
  }
  footer ul img {
      width: 0.8rem;
      margin: 0.12rem;
  }
</style>
