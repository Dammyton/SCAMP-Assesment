<template>
  <div class="container">
    <div class="mt-3">
      <b-card-group deck>
        <b-card
          bg-variant="default"
          border-variant="light"
          header-bg-variant="secondary"
          header-text-variant="white"
          header="Global Statistics "
          class="left"
        >
          <GlobalChart v-if="loaded" :data="world"  :styles="styles" />
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>



<script>
// GlobalChart.js
import GlobalChart from "./GlobalChart.vue";
import axios from 'axios';

export default {
  components: {
    GlobalChart
  },
  data(){
    return{
      loaded: false,
      world: null,
      styles: {
        width: "100%",
        height: "400px",
        position: "relative"
      }
    }
  },
  created() {
  let uri_ = `https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats`;
    axios.get(uri_).then(response => {
      console.log(response.data.data, "Global Statistics");
    this.world = response.data.data;
    this.loaded = true;
    });

  }
};
</script>

<style scoped>
.card-body{
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.08), 0 5px 26px 0 rgba(67,94,131,.15);
}
</style>