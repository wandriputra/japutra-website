<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div :class="[{active : index == 0}, 'item']" v-for="(gallery, index) in data" :key="gallery.id">
        <img :src="gallery.media_details.sizes.large.source_url" alt="" style="width:100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    props: {
      data: Object
    }
  }
</script>

<style scoped>

</style>