<template>
  <carousel :per-page="1" mouse-drag="false">
    <slide>
      Slide 1 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
  </carousel>
</template>

<script>
  import ImageDefault from '@/assets/indonesia.png';
  // import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'carousel',
    props: {
      link: String
    },
    // components: {
    //   Carousel,
    //   Slide
    // },
    data() {
      return {
        imageDefault: ImageDefault,
      };
    }
  }
</script>

<style scoped>

</style>