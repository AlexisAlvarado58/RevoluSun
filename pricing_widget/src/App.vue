<template>
  <v-app class="test">
    <v-toolbar>
      <v-img
      class="shrink mr-2"
      contain
      :src="require('../src/assets/revolusun.png')"
      width= "270" height="70"
      transition="scale-transition"
      />
      <!-- src="https://solartribune.com/wp-content/uploads/2018/01/revolusun-logo.jpg" -->
    </v-toolbar>
    <v-tabs
      v-model="tab"
      background-color="orange"
      centered
      dark
      icons-and-text
      >
      
          
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Roofs
        <v-icon>mdi-home-roof</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Site
        <v-icon>mdi-sitemap-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Configuration
        <v-icon>mdi-cog-outline</v-icon>
      </v-tab>
    </v-tabs>
    <!-- ------------------------------------------------------------------------------------------------------------------------------------ -->
    <v-tabs-items v-model="tab">
      <v-tab-item
        value="tab-1"
      >
      <Pricing class="pb-10"/>
      </v-tab-item>
  <!-- ------------------------------------------------------------------------------------------------------------------------------------ -->
      <v-tab-item
        value="tab-2"
      >
        <Site/>
      </v-tab-item>
  <!-- ------------------------------------------------------------------------------------------------------------------------------------ -->
      <v-tab-item
        value="tab-3"
      >
        <Configuration/>
      </v-tab-item>
  <!-- ------------------------------------------------------------------------------------------------------------------------------------ -->
    </v-tabs-items>
  </v-app>
</template>

<script>
import Pricing from './components/pricing.vue';
import Site from './components/site.vue';
import Configuration from './components/configuration.vue'
export default {
  name: 'App',

  components: {
    Pricing,
    Site,
    Configuration,
  },

  data(){
    return{
      tab: null
    }
  },
  async mounted(){
    await ZOHO.embeddedApp.on("PageLoad",function(data){         
        ZOHO.CRM.UI.Resize({height:"700",width:"1000"})    
        console.log(data);
    //   ZOHO.CRM.API.getRecord({Entity:"Deals",RecordID:that.dealID})
    //   .then(function(data){
    //     console.log("alexis")
    //     console.log(data);
    //   })
    })
    ZOHO.embeddedApp.init();
  }
};
</script>
<style>
  .test{
    background: rgb(238,218,174);
background: radial-gradient(circle, rgba(238,218,174,0.29175420168067223) 0%, rgba(228,129,21,1) 100%);
  }
</style>
