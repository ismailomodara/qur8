<template>
  <div class='qur-container qur-home'>
    <qur-nav />
    <qur-hero />
    <qur-intro />
    <qur-books />
  </div>
</template>

<script>
import AOS from "aos";
import QurNav from '../components/QurNav';
import QurHero from '../components/QurHero'
import QurIntro from '../components/QurIntro'
import QurBooks from '../components/QurBooks'

import "aos/dist/aos.css";

export default {
  name: 'IndexPage',
  components: {
    QurNav, QurHero, QurIntro, QurBooks
  },
  mounted() {
    AOS.init({
      offset: 60,
      duration: 1200,
    });
  }
}
</script>

<style lang='scss' scoped>
.qur-home {
  height: 100%;
  width: 100%;
  padding-bottom: 80px;
}
</style>
