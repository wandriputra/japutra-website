<template>
  <div class="row">
    <div class="container">
      <Header></Header>
      <title-page></title-page>
      <transition name="fade" mode="out-in">
        <router-view class="mb-5" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Includes/Header";
import TitlePage from "@/components/Includes/TitlePage";

export default {
  name: "App",
  components: {
    Header,
    TitlePage,
  },
  computed: {
    title() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(to bottom right, #5c7fa1, #383d42);
  background-repeat: no-repeat;
  height: 100%;
  overflow-x: hidden;
  background-attachment: fixed;
  font-family: "trebuc", serif;
}
a {
  color: #fff;
}
a:hover {
  text-decoration: none;
  color: #fff;
}
.sk-folding-cube {
  margin: auto;
  padding: auto;
  z-index: 99;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sk-folding-cube .sk-cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

$font_path: "~@/assets/fonts/";

// *********** //
// SOURCE SANS //
// ITALIC
@font-face {
  font-family: "trebuc";
  src: url($font_path + "Trebuchet-MS.eot"); /* IE9 Compat; Modes */
  src: url($font_path + "Trebuchet-MS.woff") format("woff"); /* Modern Browsers */
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
}
// REGULAR
@font-face {
  font-family: "trajan";
  src: url($font_path + "trajanp0-webfont.eot"); /* IE9 Compat; Modes */
  src: url($font_path + "trajanp0-webfont.woff") format("woff"); /* Modern Browsers */
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
}
@font-face {
  font-family: "trajan-bold";
  src: url($font_path + "trajanpro-bold.woff") format("woff"); /* Modern Browsers */
  font-style: normal;
  font-weight: 800;
  text-rendering: optimizeLegibility;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
}

// // SEMI BOLD
// @font-face{
//   font-family    : 'Source Sans Pro';
//   src            : url($font_path +'SourceSansPro-Semibold.eot'); /* IE9 Compat; Modes */
//   src            : url($font_path +'SourceSansPro-Semibold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//                    url($font_path +'SourceSansPro-Semibold.woff2') format('woff2'), /* Modern Browsers */
//                    url($font_path +'SourceSansPro-Semibold.woff') format('woff'); /* Modern Browsers */
//   font-style     : normal;
//   font-weight    : 600;
//   text-rendering : optimizeLegibility;
//}
</style>
