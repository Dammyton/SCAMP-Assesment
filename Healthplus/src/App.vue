<template>
  <div id="app">
    <!-- <router-view/> -->
    <h1>HealthPlus +</h1>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
html, 
body ,h1{
  display: flex;
  justify-content: center;
  align-items: center;
    margin: 0;
    padding: 0;
    background-image: url('./assets/emailpattern.png')
}
@media (max-width: 420px) {
  html,body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
