<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <title-page>SERVICE</title-page>
    <div class="offset-md-2 col-md-8 text row">
      <div class="col-md-12">
        <h4>BUILD YOUR DREAM</h4>
      </div>
      <div class="col-md-12 row pt-3 pt-5">
        <div class="col-md-4 text-center">
          <img :src="architech" alt="">
        </div>
        <div class="col-md-8 mt-3">
          <span class="bold-font">we turn ideas into work of art.</span>
          <p>For each project we establish relationships with partners who we know will help us create added value for your project</p>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-4 text-center">
          <img :src="retrofying" alt="">
        </div>
        <div class="col-md-8 mt-3">
          <span class="bold-font">we make strong buildings.</span>
          <p>Steady construction require solid and robust foundation as well as prosperous relations are built only on faith and mutual respect</p>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-4 text-center">
          <img :src="interior" alt="">
        </div>
        <div class="col-md-8 mt-3">
          <span class="bold-font">we satisfy our clients.</span>
          <p>We pay attention to all small details for the best results</p>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-4 text-center">
          
        </div>
        <div class="col-md-8 text-right opacity-text">
          <span class="h5-smaller">MORE THAN</span> <span class="text-gold h1-larger">10</span>  <br> <span class="text-gold h5-smaller">YEARS OF SUCCESSFUL WORK</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Architech from '@/assets/about4.png';
  import Retrofying from '@/assets/about3.png';
  import Interior from '@/assets/about1.png';
  import TitlePage from '@/components/Includes/TitlePage';

  export default {
    name: 'about',
    components: {
      TitlePage,
    },
    data() {
      return {
        architech: Architech,
        retrofying: Retrofying,
        interior: Interior,
      };
    },
    created() {
      this.$eventBus.$emit('isHome', false)
    },
  };
</script>

<style scoped>
.title-text {
  color: #fff;
}
h4 {
  letter-spacing: 20px;
  font-size: 25px; 
  font-family: 'EB Garamond', serif;
  text-align: center;
} 
p {
  font-size: 15px;
  color: #c9c9ca;
  text-align: justify;
}
.bold-font {
  font-size: 20px;
  font-weight: 500;
}
img {
  max-width: 150px;
}
.text-gold{
  color: #a29562;
}
.opacity-text {
  opacity: 0.6;
  z-index: 99;
}
.h1-larger{
  font-size: 8em;
  line-height: 0px;
}
.h5-smaller {
  font-size: 1.18rem;
}
</style>