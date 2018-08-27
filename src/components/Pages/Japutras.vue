<template>
  <div class="pl-5 pr-5 pt-3 row title-text">
    <title-page>JAPUTRAS</title-page>
    <div class="text-center col-md-12 pb-5">
      <img :src="japutra" alt="" srcset="" class="image-japutra"> <br>
      <span class="h1">The Japutras</span>
    </div>
    <div class="text-white">
<p>Fernando Japutra holds a Bachelor Degree in Civil Engineering from Andalas University.</p>
<p>In 2008, he joined the contractor company specializing in safety and risk management, seismic strengthening refurbishment and extension. He worked in commercial, residential and civil contracts starting out on the tools and became a site manager. He is very experienced in the management of commercial and civil projects</p>
<p>Throughout the West Sumatra earthquake in 2009, many engineered-buildings in Padang were damaged and some even collapsed. According to USGS, the magnitude of this earthquake is 7.6 Mw. Many of the damaged buildings were demolished to be subsequently built the new ones, while in fact many of them could be retrofitted. Meanwhile, retrofitting requires considerable expertise and technical knowledge on how where the objective is to achieve a better life safety performance</p>
<p>He joined a program which was focused in a retrofitting or pole structure improvement system carried out by the Disaster Study Center/Pusat Studi Bencana (PSB) Andalas University team.The PSB team which consisted of well-known people in the field of construction and high-rise buildings such as Dr. Teddy Boen, Prof. Abdul Hakam, Dr. Fauzan, Dr. Febrin and Prof. Zaidir.</p>
<p>The seriousness of PSB present the buildings that were of higher quality, stronger and earthquake resistant. The structure presented used a steel frame that is lighter and earthquake-proof. Additionally, by involving professional personnel, it is also carried out optimally by presenting high quality raw materials. This technique is used in rebuilding Bumiminang hotel and it is one of them is the largest and highest retrofitting project ever done in Indonesi</p>
<p>Fernando left the company in 2011 and established JAPUTRA. He is fully involved with contracts from the tendering stage to programming, liaising with onsite management, quality control and claim processes. He enjoys the day to day contact he gets with his team onsite and because of this, he is always a step ahead of the game when construction issues arrive</p>
<p>Suhendro Yaputra completed his Bachelor of Architecture at the Atma Jaya University in Jogja. Currently working in one of the architectural and interior consultants in Jakarta</p>
<p>Prior to joining the world of architecture and construction in JAPUTRA at 2011. He was working as field supervisor for residential project in Padang, West Sumatra</p>
<p>Now, Hendro is designing every project in JAPUTRA and then hands over to the extremely well qualified, experienced and specialized in team, who further develop the designs. With experience in a wide range of projects including high quality residential, commercial, social housing, and retail. Hendro brings extensive knowledge and expertise to each new project in JAPUTRA</p>
<p>Together in JAPUTRA, Fernando &amp; Hendro focus deeply on the design potential of each work, converting them into built reality, within the timeframe and budget provided, ensuring quality and on time delivery from the drawing board to the project completion stages, of each project</p>
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