<template>
  <div id="app"> 
    <router-view/>
    <footer-nav v-show="$route.meta.show" />
  </div>
</template>

<script>
import FooterNav from './components/FooterNav.vue'
export default {
  components: {
    FooterNav
  }
}
</script>
<style lang="scss">
  @import url(./assets/css/common.css);
</style>
