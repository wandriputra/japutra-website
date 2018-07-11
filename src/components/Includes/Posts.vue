<template>
  <div class="hello">
    <div class="post" v-for="post in posts" :key="post.id">
      <h1>{{post.title.rendered}}</h1>
      <p v-html="post.excerpt.rendered">
        
      </p>
      <a href="#" @click.prevent="showPost(post.id)">Selengkapnya</a>

      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data () {
    return {
      posts: null
    }
  },
  methods: {
    getData () {
      axios.get(`${process.env.WP_API}/posts`)
        .then(respone => {
          this.posts = respone.data
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
