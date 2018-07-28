<template>
  <div class="pl-5 pr-5 pt-3 pb-5 row title-text">
    <div class="col-md-12">
      <div class="float-right">
        <h4>JAPUTRA</h4>
        <span>CONSTRUCTION</span>
      </div>
    </div>
    <div class="col-md-12 mt-3 row tablet-img" style="padding-left:75px">
      <div 
        class="col-md-2 pl-2 m-2 trapesium" 
        v-for="image in images" 
        :key="image.id" 
        :style="{'background-image': `url(${image.img_t})`, 'background-position': 'center'}">
      </div>
    </div>
    <div class="col-md-12 mt-3 row phone-img" style="padding-left:55px">
      <div 
        class="col-md-12 mb-3 normalized" 
        v-for="image in images" 
        :key="image.id" 
        :style="{'background-image': `url(${image.img})`, 'background-position': 'center'}">
      </div>
    </div>
    <div class="col-md-12">
      DESIGN & BUILD
    </div>
    <div class="col-md-12">
      <div class="float-right">
        <a href="http://facebook.com/japutraconstruction">
          <img :src="facebook" alt="">
        </a>
        <a href="http://instagram.com/japutraconstruction">
          <img :src="instagram" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "@/assets/testbg.jpg";
import Pict1T from "@/assets/home/pic1-t.png";
import Pict2T from "@/assets/home/pic2-t.png";
import Pict3T from "@/assets/home/pic3-t.png";
import Pict4T from "@/assets/home/pic4-t.png";
import Pict5T from "@/assets/home/pic5-t.png";
import Pict1 from "@/assets/home/pic1.png";
import Pict2 from "@/assets/home/pic2.png";
import Pict3 from "@/assets/home/pic3.png";
import Pict4 from "@/assets/home/pic4.png";
import Pict5 from "@/assets/home/pic5.png";
import Facebook from "@/assets/facebook.png";
import Instagram from "@/assets/instagram.png";

export default {
  name: "home",
  data() {
    return {
      images: [
        {
          img_t: Pict1T,
          img: Pict1,
        },
        {
          img_t: Pict2T,
          img: Pict2,
        },
        {
          img_t: Pict3T,
          img: Pict3,
        },
        {
          img_t: Pict4T,
          img: Pict4,
        },
        {
          img_t: Pict5T,
          img: Pict5,
        },
      ],
      facebook: Facebook,
      instagram: Instagram
    };
  },
  created() {
    this.$eventBus.$emit("isHome", true);
  }
};
</script>

<style scoped>
.title-text {
  font-family: "trajan", serif;
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
  opacity: 0.8;
  -webkit-transform: skewX(-30deg);
  -moz-transform: skewX(-30deg);
  -o-transform: skewX(-30deg);
  transform: skewX(-30deg);
}
.trapesium:hover {
  opacity: 1;
}
.normalized {
  height: 300px;
}
@media (max-width: 576px) {
  .tablet-img {
    display: none;
  }
  .phone-img {
    display: inherit;
  }
}
@media (min-width: 768px) {
  .phone-img {
    display: none;
  }
  .tablet-img {
    display:inherit;
  }
}
</style>