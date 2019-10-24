<template>

 <div id="my-app" :style="{background:'#2dc4b6'}">

      <div class="container" id="box">
          <div style="background-color:#fff;width:100%">
              <h1>Deposit</h1>
          </div>
           <div>
              <h1>Deposit</h1>
          </div>
          <div class="sidebar">

              <h2> We accept payment from</h2>
                <h2>Visa, MasterCard, Verve Card </h2>

              <a class="get-started"><router-link class="get-started"  to="/login">Next</router-link></a>
       <center> <hr style="height: 5px;width: 100px;background-color: black;border-radius: 25px;margin-top: 60px"> </center> 
          </div>
      </div>

</div>



</template>

<script>
export default{
  el:'#my-app',
  name:'nextpagetwo'    
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 150px 60px;
}
router-link.get-started,a.get-started{
    background-color: #fff;
    color: red;
    font-size: 18px;
    font-family: 'Noto-sans',sans-serif;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration:none;
    font-weight: 700;
    margin: 50px 45px 0 45px;
    width: 70%;
}
a.get-started:hover{
    background-color: red;
    color: #fff;
}
#logo{
    width: 500px;
}
.container>div:first-child{
    display: none;
}
.container>div:nth-child(2){
    background-image: url('../assets/next2.png');
    width: 550px;
    height: 400px;
    background-position: center;
    background-size: cover
}
div.sidebar{
    display: flex;
    flex-direction: column;
    background-color:#4be0d1;
    width: 300px;
    height: 300px;
    text-align: center;
    padding: 40px 2px;
}
h1{
    color:#2dc4b6;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-top: 20px
}
h2{
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 2.5rem

}
@media (max-width: 420px) {
  div#box{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .container>div:nth-child(2){
    background-image: url('../assets/next2.png');
    width: 100%;
    height: 230px;
    background-position: left;
    background-size: cover;
    border-radius: 0 0 42% 42%;
  }
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0;
  }
  div.sidebar{
    display: flex;
    flex-direction: column;
    background-color:#2dc4b6;
    width: 300px;
    height: 330px;
    text-align: center;
    padding: 60px 2px 0px 2px;
  }
  .container>div:first-child{
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding-top: 20px;
    margin: 0;
  }
  .container>div:nth-child(2)>h1{
    display: none;
  }
  h1{
    color:#2dc4b6;
    text-align: right;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    font-size: 40px;
    margin-top: 0
  }
  p{
    font-size: 60px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: right;
    padding-right: 0;
    font-weight: 900;
  } 
}
</style>

