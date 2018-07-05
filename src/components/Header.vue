<template>
  <div class="mt-5 mb-5">
    <nav class="p-3 nav d-flex justify-content-between">
      <router-link to='/' class="pl-3 pr-4"><img :src="logo" alt="" width="30px"></router-link>
      <router-link :to='menu.link' v-for="menu in menus" :key="menu.id" :class="menu.class">{{menu.text}}</router-link>
    </nav>
  </div>
 
</template>

<script>
  import Logo from '@/assets/logo-japutra-sm.png';

  export default {
    data() {
      return {
        menus: [
          { link: '/', text: 'HOME', class: 'link-dot'},
          { link: '/about', text: 'ABOUT', class: 'link-dot'},
          { link: '/service', text: 'SERVICES', class: 'link-dot'},
          { link: '/work', text: 'WORKS', class: 'link-dot'},
          { link: '/contact', text: 'CONTACTS', class: 'mr-5'},
        ],
        logo: Logo,
      };
    },
    mounted: {
      // isHome() {
      //   return this.$route.meta.isHome;
      // },
    },
  };
</script>

<style scoped>
nav {
  background-color: #66818c;
  font-family: 'Cabin Condensed', sans-serif;
}
.link-dot::after {
  content:"\00d8";
  padding: 70px;
}
</style>