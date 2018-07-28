<template>
  <div class="pt-3 pb-3 ml-2">
    <title-page>WORKS</title-page>
    <div class="sk-folding-cube" v-if="loadData">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
    <div v-if="!loadData">
      <div class="col-md-12 row" >
        <div class="col-md-3" v-for="post in posts" :key="post.id">
          <router-link :to="{ path: 'work-detail', query: { id: post.id }}">
            <img :src="post.image" alt="" width="100%" class="feature-image">
            <span class="label">{{post.title}}</span>
          </router-link>
        </div>
      </div>
      <div class="col-md-12 paginate-link text-center">
        <a class="btn btn-primary-outline" v-for="i in totalPost" :key="i.id" @click.prevent="getData(i)">&bull;</a>	
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import TitlePage from '@/components/Includes/TitlePage'

export default {
  name: 'work',
  components: {
    TitlePage,
  },
  data () {
    return {
      posts: [],
      totalPost: null,
      loadData: true
    }
  },
  methods: {
    getData (i) {
      this.posts = []
      this.loadData = true
      axios.get(`${process.env.WP_API}/posts?categories=${process.env.CATEGORI_ID}&_embed&per_page=4&page=${i}`)
        .then(respone => {
          const post = respone.data
          this.totalPost = parseInt(respone.headers['x-wp-totalpages'])
          post.map((data) => {
            this.posts.push({
              id: data.id,
              title: data.title.rendered,
              image: data._embedded['wp:featuredmedia'][0].source_url
            })
          })
          this.loadData = false
        })
    },
    showPost (id) {
      this.$router.push(`/post/${id}`)
    }
  },
  created () {
    this.getData(1)
    this.$eventBus.$emit('isHome', false);
  }
}
</script>

<style scoped>
.label {
  position: absolute;
  bottom: 1px;
  right: 25px;
  text-align: right;
  width: 80%;
  color: #fff;
  font-family: 'arial', serif;
  padding: 10px;
  background-color: hsla(0, 0%, 43%, 0.562);
}
.feature-image {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
  -webkit-transition: opacity 0.5s; /* For Safari 3.1 to 6.0 */
  transition: opacity 0.5s;
}
.feature-image:hover {
  opacity: 1;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}
</style>