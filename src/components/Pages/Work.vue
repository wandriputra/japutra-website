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
      <div class="col-md-12 row">
        <div class="col-md-3 works-image" v-for="post in posts" :key="post.id">
          <router-link :to="{ path: 'work-detail', query: { id: post.id }}">
            <img :src="post.image" alt width="100%" class="feature-image" />
            <span class="label" v-html="post.title"></span>
          </router-link>
        </div>
      </div>
      <div class="col-md-12 paginate-link text-center">
        <a
          class="btn btn-primary-outline"
          v-for="i in [1,4,8]"
          :key="i"
          @click.prevent="getData(i)"
        >
          <i class="fa fa-circle-o" v-if="i !== currentPage"></i>
          <i class="fa fa-circle" v-if="i == currentPage"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import TitlePage from "@/components/Includes/TitlePage";
import Image01 from '@/assets/image/01.mopah.jpg';
import Image02 from '@/assets/image/02.office-warehouse.jpg';
import Image03 from '@/assets/image/03.green-mutiara.jpg';
import Image04 from '@/assets/image/04.villa-air-manis.jpg';
import Image05 from '@/assets/image/05.airlangga-university.jpg';
import Image06 from '@/assets/image/06.rsud-arifin-ahmad.jpg';
import Image07 from '@/assets/image/07.mr-oscar.jpg';
import Image08 from '@/assets/image/08.bernama.jpg';
import Image09 from '@/assets/image/09.villa-air-manis.jpg';
import Image10 from '@/assets/image/10.bussura-city.jpg';
import Image11 from '@/assets/image/11.plan-b.jpg';
import Image12 from '@/assets/image/12.bumiminang.jpg';

export default {
  name: "work",
  components: {
    TitlePage
  },
  data() {
    return {
      posts: [],
      postsData: [
        {
          id: "1",
          title: "Villa Air Manis – PT. Dempo Padang",
          image: Image09,
        },
        {
          id: "2",
          title: "Kriyad Hotel Bumiminang Padang",
          image: Image12,
        },
        {
          id: "3",
          title: "Plan B Hotel Padang",
          image: Image11,
        },
        {
          id: "4",
          title: "Bassura City – Jakarta",
          image: Image10,
        },
        {
          id: "5",
          title: "Rumah Makan Bernama Padang",
          image: Image08,
        },
        {
          id: "6",
          title: "Residence – Mr. Oscar Padang",
          image: Image07,
        },
        {
          id: "7",
          title: "RSUD Arifin Achmad Riau",
          image: Image06,
        },
        {
          id: "8",
          title: "Airlangga University Surabaya",
          image: Image05,
        },
        {
          id: "9",
          title: "Villa Air Manis – PT. Dempo Padang",
          image: Image04,
        },
        {
          id: "10",
          title: "Green Mutiara Residence Padang",
          image: Image03,
        },
        {
          id: "11",
          title: "Mopah Int. Airport Merauke",
          image: Image01
        },
        {
          id: "12",
          title: "Office Warehouse Padang",
          image: Image02,
        }
      ],
      totalPost: 8,
      loadData: true,
      currentPage: 1
    };
  },
  methods: {
    getData(i) {
      this.loadData = true;
      this.posts = this.postsData.slice(i, i+4);
      this.loadData = false;
      this.currentPage = i;
      // // axios
      //   .get(
      //     `http://localhost/japutra-api/wp-json/wp/v2/posts?categories=3&_embed&per_page=4&page=${i}&order=asc`
      //   )
      //   .then(respone => {
      //     const post = respone.data;
      //     this.totalPost = parseInt(respone.headers["x-wp-totalpages"]);
      //     post.map(data => {
      //       this.posts.push({
      //         id: data.id,
      //         title: data.title.rendered,
      //         image: data._embedded["wp:featuredmedia"][0].source_url
      //       });
      //     });
      //     this.loadData = false;
      //   });
    },
    showPost(id) {
      this.$router.push(`/post/${id}`);
    }
  },
  created() {
    this.getData(1);
    this.$eventBus.$emit("isHome", false);
  }
};
</script>

<style scoped>
.label {
  position: absolute;
  bottom: 1px;
  right: 15px;
  text-align: right;
  width: 80%;
  color: #fff;
  font-family: "trajan", serif;
  padding: 10px;
  background-color: hsla(0, 0%, 43%, 0.562);
  font-size: 12px;
}
.paginate-link {
  color: #fff;
}
.feature-image {
  opacity: 1;
  filter: alpha(opacity=50); /* For IE8 and earlier */
  -webkit-transition: opacity 0.5s; /* For Safari 3.1 to 6.0 */
  transition: opacity 0.5s;
}
.feature-image:hover {
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}
@media (max-width: 576px) {
  .works-image {
    margin-bottom: 30px;
  }
}
</style>