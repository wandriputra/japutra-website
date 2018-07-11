<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <title-page>CONTACTS</title-page>
    <div class="offset-md-3 col-md-8 text row">
      <div class="col-md-12 row pt-3 pt-5">
        <div class="col-md-10 row">
          <div class="col-md-3">
            <img :src="stack" alt=""></div>
          <div class="col-md-9">
          <span class="bold-font">EMAIL</span>
          <p>japutraeknikindoperkasa@yahoo.com</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-10 row">
          <div class="col-md-3">
            <img :src="stack" alt=""></div>
          <div class="col-md-9">
          <span class="bold-font">Phone</span>
          <p>+62 751 39585 <br>+62 819 7519898</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 row pt-3">
        <div class="col-md-10 row">
          <div class="col-md-3">
            <img :src="stack" alt=""></div>
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
      this.$eventBus.$emit('isHome', '1');
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
</style>