<template>
  <div class="pl-5 pr-5 pt-3 row title-text" 
    :style="{'background-image': `url(${indonesia})`, 'background-repeat': 'no-repeat', 'background-attachment': 'fixed', 'background-position': 'center'}">
    <title-page>CONTACTS</title-page>
    <div class="offset-md-3 col-md-8 text row">
      <div class="col-md-12 row pt-3 pt-5">
        <div class="col-md-10 row">
          <div class="col-md-3">
            <img :src="mail" alt=""></div>
          <div class="col-md-9">
          <span class="bold-font">EMAIL</span>
          <p>japutraeknikindoperkasa@yahoo.com</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-10 row">
          <div class="col-md-3">
            <img :src="phone" alt=""></div>
          <div class="col-md-9">
          <span class="bold-font">Phone</span>
          <p>+62 751 39585 <br>+62 85272 132 193</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-10 row">
          <div class="col-md-3">
            <img :src="marker" alt=""></div>
          <div class="col-md-9">
          <span class="bold-font">Address</span>
          <p>Jl. Pemuda no 43i (Belakang Sari Musik) <br> Padang Barat, Padang-Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mail from '@/assets/mail.png';
  import Phone from '@/assets/phone.png';
  import Marker from '@/assets/marker.png';
  import BgIndonesia from '@/assets/indonesia.png';
  import TitlePage from '@/components/Includes/TitlePage';

  export default {
    name: 'about',
    components: {
      TitlePage,
    },
    data() {
      return {
        mail: Mail,
        phone: Phone,
        marker: Marker,
        indonesia: BgIndonesia,
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
  letter-spacing: 20px;
  font-size: 25px; 
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
  max-width: 80px;
}
</style>