<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <title-page>JAPUTRAS</title-page>
    <div class="text-center col-md-12 pb-5">
      <img :src="japutra" alt="" srcset="" class="image-japutra"> <br>
      <span class="h1">The Japutras</span>
    </div>
    <div class="text-white">
      <p>Fernando Japutra was educated and graduated with Bachelor in Civil Engineer from the Andalas University in 2007. </p>
      <p>In 2008, he joined the contractor company which specialized in process safety and risk management, seismic strengthening refurbishment and extension. He worked in commercial, residential and civil contracts starting out on the tools and become a project manager. He is very experienced in the management of commercial and civil projects.</p>
      <p>During the September 30, 2009 West Sumatera earthquake, many engineered-buildings in Padang were damaged and some even collapsed. According to USGS, the the magnitude of this earthquake is 7.6 Mw. Many of the damaged buildings were demolished to be subsequently built new ones, while in fact many of them could be retrofitted. Meanwhile, retrofitting requires considerable expertise and technical knowhow where the objective is to achieve a better life safety performance.</p>
      <p>He joined an improvement program with a retrofitting or pole structure improvement system carried out by the Disaster Study Center (PSB) Andalas University team. The PSB team which consisted of Dr. Teddy Boen, Prof. Abdul Hakam, Dr. Fauzan, Dr. Febrin and Prof. Zaidir. They were well known in the world of construction and high-rise buildings.</p>
      <p>The seriousness of PSB present the buildings that were of higher quality, stronger and earthquake resistant. The structure presented uses a steel frame that is lighter and more resistant. Additionally, to involving professional personnel, it is also carried out optimally by presenting high quality raw materials. One of the projects is the largest and highest retrofitting project in Indonesia for Bumiminang Hotel.</p>
      <p>Fernando left the company in 2011 and founded JAPUTRA. He is fullly involved with contracts from the tendering stage through toprogramming, liaising with onsite management, quality control and claim processes. He enjoys the day to day contact he gets with his team onsite and because of this is always ahead of the game when construction issues arrive.</p>
    </div>
  </div>
</template>

<script>
  import TitlePage from '@/components/Includes/TitlePage';
  import Japutras from '@/assets/japutras.jpeg';

  export default {
    name: 'about',
    components: {
      TitlePage,
    },
    data() {
      return {
        japutra: Japutras,
      };
    },
    created() {
      this.$eventBus.$emit('isHome', '1');
    },
  };
</script>

<style scoped>
.title-text {
  color: #fff;
}
.text-white {
  color: #fff;
}
h4 {
  letter-spacing: 20px;
  font-size: 25px; 
  text-align: center;
} 
.image-japutra {
  border-radius: 50%;
  width: 300px;
}
p {
  font-size: 15px;
  text-align: justify;
}
.bold-font {
  font-size: 20px;
  font-weight: 500;
}
</style>