<template>
  <div class="mt-5 mb-5">
    <nav :class="['navbar navbar-expand-lg home-nav']">
      <router-link to="/" class="navbar-brand">
        <img :src="logo" alt="" width="60px" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Japutra.co.id <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item nav-item-list"
            v-for="menu in menus"
            :key="menu.id"
          >
            <router-link
              :to="menu.link"
              :class="[menu.class, 'nav-item nav-link text-center header-text']"
            >
              {{ menu.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/assets/logo-japutra-sm.png";

export default {
  name: "header",
  data() {
    return {
      menus: [
        { link: "/home", text: "HOME", class: "link-dot", isHome: true },
        {
          link: "/service",
          text: "SERVICES",
          class: "link-dot",
          isHome: false,
        },
        { link: "/work", text: "WORKS", class: "link-dot", isHome: false },
        { link: "/about", text: "ABOUT", class: "link-dot", isHome: false },
        {
          link: "/japutras",
          text: "JAPUTRAS",
          class: "link-dot",
          isHome: false,
        },
        { link: "/contact", text: "CONTACTS", class: "", isHome: false },
      ],
      logo: Logo,
      isHome: false,
    };
  },
  // method: {
  //   updateIsHome(val) {
  //     this.isHome = val;
  //     console.log(val);
  //   },
  // },
  // mounted() {
  //   this.$eventBus.$on('isHome', this.updateIsHome);
  // },
};
</script>

<style scoped>
nav {
  font-family: "trebuc", sans-serif;
}
.home-nav {
  /* background-color: #66818c; */
  color: #fff !important;
}
.navbar-toggler {
  color: #fff;
}

.router-link-active {
  color: #b80000;
  font-weight: bold;
}
@media (min-width: 1024px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: inherit !important;
    padding-left: inherit !important;
  }
  .link-dot::after {
    content: "\2022";
    padding: 30px;
  }
  .link-dot::before {
    padding: 30px;
  }
  .navbar-nav {
    padding-left: 20px;
  }
}
.header-text {
  letter-spacing: 5px;
}
</style>