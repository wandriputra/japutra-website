<template>
  <div class="pb-3 ml-2">
    <div class="sk-folding-cube" v-if="loadData">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
    <div v-if="!loadData">
      <div class="col-md-12 row" >
        <div class="col-md-12">
          <router-link to="/work">Back</router-link>
        </div>
        <div class="col-md-12" v-if="!loadData">
          <p v-html="post.content.rendered"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'work-detail',
  data () {
    return {
      post: [],
      totalPost: null,
      loadData: true,
      galleries: []
    }
  },
  methods: {
    getData (i) {
      this.posts = []
      this.loadData = true
      axios.get(`${process.env.WP_API}/posts/${i}?_embed`)
        .then(respone => {
          this.post = respone.data
          return respone.data._links['wp:attachment'][0].href
        }).then((link) => {
          axios.get(link)
            .then((respone) => {
              this.galleries = respone.data
            })
        }).then(() => {
          this.loadData = false
        })
    },
    showPost (id) {
      this.$router.push(`/post/${id}`)
    }
  },
  mounted () {
    this.getData(this.$route.query.id)
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
  font-family: 'EB Garamond', serif;
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