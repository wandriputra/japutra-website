<template>
  <div class="mt-5 mb-5">
    <nav :class="['p-3 nav d-flex justify-content-between',{'home-nav': this.$router.currentRoute.path == '/'}]">
      <router-link to='/' class="pl-2 pr-3">
        <img :src="logo" alt="" width="30px">
      </router-link>
      <router-link 
        :to='menu.link' 
        v-for="menu in menus" 
        :key="menu.id" 
        :class="menu.class">
        {{menu.text}}
      </router-link>
    </nav>
  </div>
</template>

<script>
  import Logo from '@/assets/logo-japutra-sm.png';

  export default {
    name: 'header',
    data() {
      return {
        menus: [
          { link: '/', text: 'HOME', class: 'link-dot', isHome: true},
          { link: '/about', text: 'ABOUT', class: 'link-dot', isHome: false},
          { link: '/service', text: 'SERVICES', class: 'link-dot', isHome: false},
          { link: '/work', text: 'WORKS', class: 'link-dot', isHome: false},
          { link: '/japutras', text: 'JAPUTRAS', class: 'link-dot', isHome: false},
          { link: '/contact', text: 'CONTACTS', class: 'mr-5', isHome: false},
        ],
        logo: Logo,
        isHome: false,
      };
    },
    method: {
      updateIsHome(val) {
        this.isHome = val;
        console.log(val);
      },
    },
    mounted() {
      this.$eventBus.$on('isHome', this.updateIsHome);
    },
  };
</script>

<style scoped>
nav {
  font-family: 'trebuc', sans-serif;
}
.home-nav {
  background-color: #66818c;
}
  
.link-dot::after {
  content:"\2022";
  padding: 50px;
}
</style>