<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <div class="offset-md-2 col-md-8 text row">
      <div class="col-md-12">
        <h4>BUILD YOUR DREAM</h4>
      </div>
      <div class="col-md-12 row pt-3 pt-5">
        <div class="col-md-4">
          <img :src="stack" alt="">
        </div>
        <div class="col-md-8">
          <span class="bold-font">we turn ideas into work of art.</span>
          <p>For each project we establish relationships with partners who we know will help us create added value for your project</p>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-4">
          <img :src="stack" alt="">
        </div>
        <div class="col-md-8">
          <span class="bold-font">we make strong buildings.</span>
          <p>Steady construction require solid and robust foundation as well as prosperous relations are built only on faith and mutual respect</p>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-4">
          <img :src="stack" alt="">
        </div>
        <div class="col-md-8">
          <span class="bold-font">we satisfy our clients.</span>
          <p>We pay attention to all small details for the best results</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Stack from '@/assets/stack.png';
  import Check from '@/assets/check.png';
  import Gear from '@/assets/gear.png';

  export default {
    name: 'about',
    data() {
      return {
        stack: Stack,
        check: Check,
        gear: Gear,
      };
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
</style>