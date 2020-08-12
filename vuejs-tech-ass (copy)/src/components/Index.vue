<template>
  <div class="hello">
    <navbar/>

    <breadcrumb/>

    <globalstats/>

    <countrystats/>

    <footerbar/>
  </div>
</template>

<script>
import navbar from './navbar'
import breadcrumb from './breadcrumb'
import globalstats from './global-stats'
import countrystats from './country-stats'
import footerbar from './footer'

export default {
  name: 'App',
  components: {
    navbar,
    breadcrumb,
    globalstats,
    countrystats,
    footerbar
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
