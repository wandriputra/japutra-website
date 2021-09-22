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
          <router-link :to="{ path: 'work-detail', query: { id: post.id } }">
            <img :src="post.image" alt width="100%" class="feature-image" />
            <span class="label" v-html="post.title"></span>
          </router-link>
        </div>
      </div>
      <div class="col-md-12 paginate-link text-center">
        <a
          class="btn btn-primary-outline"
          v-for="i in [1, 4, 8, 12, 16, 20]"
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
import Image01 from "@/assets/image/japutra_1.jpg";
import Image02 from "@/assets/image/japutra_2.jpg";
import Image03 from "@/assets/image/japutra_3.jpg";
import Image04 from "@/assets/image/japutra_4.jpg";
import Image05 from "@/assets/image/japutra_5.jpg";
import Image06 from "@/assets/image/japutra_6.jpg";
import Image07 from "@/assets/image/japutra_7.jpg";
import Image08 from "@/assets/image/japutra_8.jpg";
import Image09 from "@/assets/image/japutra_9.jpg";
import Image10 from "@/assets/image/japutra_10.jpg";
import Image11 from "@/assets/image/japutra_11.jpg";
import Image12 from "@/assets/image/japutra_12.jpg";
import Image13 from "@/assets/image/japutra_13.jpg";
import Image14 from "@/assets/image/japutra_14.jpg";
import Image15 from "@/assets/image/japutra_15.jpg";
import Image16 from "@/assets/image/japutra_16.jpg";
import Image17 from "@/assets/image/japutra_17.jpg";
import Image18 from "@/assets/image/japutra_18.jpg";
import Image19 from "@/assets/image/japutra_19.jpg";
import Image20 from "@/assets/image/japutra_20.jpg";
import Image21 from "@/assets/image/japutra_21.jpg";
import Image22 from "@/assets/image/japutra_22.jpg";

export default {
  name: "work",
  components: {
    TitlePage,
  },
  data() {
    return {
      posts: [],
      postsData: [
        {
          id: "1",
          title: "OFFICE/WAREHOUSE PADANG",
          image: Image01,
        },
        {
          id: "2",
          title: "MOPAH INT.AIRPORT MERAUKE",
          image: Image02,
        },
        {
          id: "3",
          title: "GREEN MUTIARA RESIDENCE PADANG",
          image: Image03,
        },
        {
          id: "4",
          title: "VILLA AIR MANIS - PT. DEMPO PADANG",
          image: Image04,
        },
        {
          id: "5",
          title: "AIR LANGGA UNIVERSITY SURABAYA",
          image: Image05,
        },
        {
          id: "6",
          title: "RSUD ARIFIN ACHMAD RIAU",
          image: Image06,
        },
        {
          id: "7",
          title: "RESIDENCE - MR OSCAR PADANG",
          image: Image07,
        },
        {
          id: "8",
          title: "RUMAH MAKAN BERNAMA PADANG",
          image: Image08,
        },
        {
          id: "9",
          title: "Villa Air Manis – PT. Dempo Padang",
          image: Image09,
        },
        {
          id: "10",
          title: "BASSURA CITY JAKARTA",
          image: Image10,
        },
        {
          id: "11",
          title: "PLAN B HOTAL PADANG",
          image: Image11,
        },
        {
          id: "12",
          title: "KRYAD BUMIMINAG HOTAL PADANG",
          image: Image12,
        },
        {
          id: "13",
          title: "BSD CITY TANGGERANG SELATAN",
          image: Image13,
        },
        {
          id: "14",
          title: "PLAN SHOP & COFFEE PADANG",
          image: Image14,
        },
        {
          id: "15",
          title: "ALAM SUTERA TANGERANG SELATAN",
          image: Image15,
        },
        {
          id: "16",
          title: "KOPI SOE PADANG",
          image: Image16,
        },
        {
          id: "17",
          title: "GEBUNG SERBAGUNA FAKULTAS HUKUM UNAND-PADANG",
          image: Image17,
        },
        {
          id: "18",
          title: "RENGAT RIAU",
          image: Image18,
        },
        {
          id: "19",
          title: "PASCA SARJANA UNAND PADANG",
          image: Image19,
        },
        {
          id: "20",
          title: "BSD CITY TANGGERANG SELATAN",
          image: Image20,
        },
        {
          id: "21",
          title: "BANDARA SILANGIT SUMATERA UTARA",
          image: Image21,
        },
        {
          id: "22",
          title: "UNIVERSITAS AIRLANGGAN SURABAYA",
          image: Image22,
        },
      ],
      totalPost: 8,
      loadData: true,
      currentPage: 1,
    };
  },
  methods: {
    getData(i) {
      this.loadData = true;
      this.posts = this.postsData.slice(i, i + 4);
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
    },
  },
  created() {
    this.getData(1);
    this.$eventBus.$emit("isHome", false);
  },
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
  font-weight: 800;
  /* background-color: hsla(0, 0%, 43%, 0.562); */
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