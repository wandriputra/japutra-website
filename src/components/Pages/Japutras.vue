<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <title-page>JAPUTRAS</title-page>
  </div>
</template>

<script>
  import TitlePage from '@/components/Includes/TitlePage';

  export default {
    name: 'about',
    components: {
      TitlePage,
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