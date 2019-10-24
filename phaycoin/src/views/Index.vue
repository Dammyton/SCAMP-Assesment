<template>

 <div id="my-app">

      <div class="container">
        <img  id="logo" src="../assets/logop.png" alt="logo">
              <a class="get-started"><router-link class="get-started"  to="/nextpage">Get Started</router-link></a>
        <hr style="height: 5px;width: 100px;background-color: black;border-radius: 25px;margin-top: 40px">
      </div>

</div>



</template>

<script>
export default{
  el:'#my-app',
  name:'index'
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 230px;
}
router-link.get-started,a.get-started{
    background-color: #2dc4b6;
    color: white;
    font-size: 18px;
    font-family: 'Noto-sans',sans-serif;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration:none;
    font-weight: 700;
    margin-top: 200px;
}
a.get-started:hover{
    background-color: white;
    color: #2dc4b6;
}

@media (max-width: 420px) {
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
}
router-link.get-started,a.get-started{
    background-color: #2dc4b6;
    color: white;
    font-size: 18px;
    font-family: 'Noto-sans',sans-serif;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration:none;
    font-weight: 700;
    margin-top: 180px;
}
a.get-started:hover{
    background-color: white;
    color: #2dc4b6;
}
}
</style>

