<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <div class="col-md-12">
      <div class="float-right">
        <h4>JAPUTRA</h4>
        <span>ARCHITECTURE</span>
      </div>
    </div>
    <div class="col-md-12 mt-3 row" style="padding-left:75px">
      <div class="col-md-2 pl-2 m-2 trapesium" :style="{'background-image': `url(${image})`}">
      </div>
      <div class="col-md-2 pl-2 m-2 trapesium" :style="{'background-image': `url(${image})`}">
      </div>
      <div class="col-md-2 pl-2 m-2 trapesium" :style="{'background-image': `url(${image})`}">
      </div>
      <div class="col-md-2 pl-2 m-2 trapesium" :style="{'background-image': `url(${image})`}">
      </div>
      <div class="col-md-2 pl-2 m-2 trapesium" :style="{'background-image': `url(${image})`}">
      </div>
    </div>
    <div class="col-md-12">
      DESIGN & BUILD
    </div>
    <div class="col-md-12">
      <div class="float-right">
        <a href="http://facebook.com/japutra">
          <img :src="facebook" alt="">
        </a>
        <a href="http://instagram.com/japutra">
          <img :src="instagram" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Image from '@/assets/testbg.jpg';
  import Facebook from '@/assets/facebook.png';
  import Instagram from '@/assets/instagram.png';

  export default {
    name: 'home',
    data() {
      return {
        image: Image,
        facebook: Facebook,
        instagram: Instagram,
      };
    },
    created() {
      this.$eventBus.$emit('isHome', true);
    },
  };
</script>

<style scoped>
.title-text {
  font-family: 'trajan', serif;
  color: #fff;
  letter-spacing: 6px;
}
h4 {
  letter-spacing: 5px;
  font-size: 35px; 
}
span {
  letter-spacing: 6px;
}
.trapesium {
  height: 350px;
  -webkit-transform: skew(-30deg);
  -moz-transform: skew(-30deg);
  -o-transform: skew(-30deg);
  transform: skew(-30deg);
}
.normalize{
  -webkit-transform: skew(30deg);
  -moz-transform: skew(30deg);
  -o-transform: skew(30deg);
  transform: skew(30deg);
}
</style>