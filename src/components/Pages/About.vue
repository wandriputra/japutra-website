<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <title-page>ABOUT</title-page>
    <div class="col-md-12 text">
      <h4>JAPUTRA ARCHITECTURE</h4>
      <p> In 2009, a terrifying earthquake happened in padang city and destroyed many buildings and infrastructures,
Fernando Japutra had the opportunity to work on a retrofit project at a biggest hotel in Padang at that time, Kyriad Bumiminang hotel.
Ever since many opportunities keep coming and Fernando Japutra steady to establish PT.JAPUTRA in the same year.
With passion, hard work and consistency, PT.JAPUTRA has gained a lot of trust so that our company continue to grow until today.</p>
    </div>
    <div class="row pt-4">
      <div class="col-md-4 text-center">
        <img :src="check" alt="">
        <h4>Perfect <br> experience</h4>
        <p class="pt-4">With the more than 10 years experiences! Looking for some  helpful advice? We value your trust!</p>
      </div>
      <div class="col-md-4 text-center">
        <img :src="gear" alt="">
        <h4>Expert <br> modeling</h4>
        <p class="pt-4">Go no further, you’ve come to the right place. We are professional experienced and dedicated to your satisfaction.</p>
      </div>
      <div class="col-md-4 text-center">
        <img :src="stack" alt="">
        <h4>Free quick <br> estimates</h4>
        <p class="pt-4">We provide businesses of all sizes with a comprehensive set of solutions that meet their needs.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Stack from '@/assets/stack.png';
  import Check from '@/assets/check.png';
  import Gear from '@/assets/gear.png';
  import TitlePage from '@/components/Includes/TitlePage';

  export default {
    name: 'about',
    components: {
      TitlePage,
    },
    data() {
      return {
        stack: Stack,
        check: Check,
        gear: Gear,
      };
    },
    created() {
      this.$eventBus.$emit('isHome', false);
    },
  };
</script>

<style scoped>
.title-text {
  color: #fff;
}
h4 {
  letter-spacing: 5px;
  font-size: 25px; 
}
.text > p {
  font-size: 15px;
  color: #c9c9ca;
  text-align: justify;
}
</style>