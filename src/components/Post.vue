<template>
  <div class="hello">
    <div class="post">
      <h1>{{post.title.rendered}}</h1>
      <img :src="feature" alt="">
      <p v-html="post.content.rendered"></p>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  data () {
    return {
      post: null,
      feature: null
    }
  },
  methods: {
    getData () {
      axios.get(`${process.env.WP_API}/posts/${this.$route.params.post}`)
        .then(respone => {
          this.post = respone.data
          this.feature = post._links.featuredmedia[0].href
        })
    },
    showPost (id) {
      this.$router.push(`/post/${id}`)
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>

</style>
