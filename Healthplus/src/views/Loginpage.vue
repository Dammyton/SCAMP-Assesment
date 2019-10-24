<template>
      <div>

        <div id="root" class="container">
            <div class="logo">
              <img style="width:80px;" src="../assets/logop.png" alt="logo">
            </div>
       
        <div class="login">
          <tabs class="container"> 
            <tab  name="Login" :selected="true" >
                <div class="field">
                      <input style="margin-top:40px" class="input " type="text" placeholder="Enter your email..." >
                  </div>
                  
                  <div class="field">
                      <input class="input" type="email" placeholder="Enter your password...">
                  </div>
                  
                    <div>
                      <center> <a class="get-started"><router-link class="get-started"  to="/login">Login</router-link></a></center>
                    </div>
                    <div>
                     <center> <p>Forget Password?</p></center>
                    </div>

       <center> <hr style="height: 5px;width: 100px;background-color: black;border-radius: 25px;margin-top: 60px;"> </center> 
            </tab>
      
            <tab name="Register">
            <div class="field">
                  <input class="input " type="text" placeholder="First Name" >
              </div>
              
              <div class="field">
                  <input class="input" type="text" placeholder="Last Name">
              </div>
              <div class="field">
                  <input class="input " type="email" placeholder="Email" >
              </div>
              
              <div class="field">
                  <input class="input" type="password" placeholder="Password">
              </div>
              
                <div>
                      <center> <a class="get-started"><router-link class="get-started"  to="/login">Register</router-link></a></center>
                    </div>


       <center> <hr style="height: 5px;width: 100px;background-color: black;border-radius: 25px;margin-top: 45px;"> </center> 

                    
              </tab>
        </tabs>
        </div>
        
    </div>
      </div>
      
    
</template>

<script>
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'


export default {
    name:'Hello',
    el: '#root',
    components: {
        Tabs,Tab
    }
}
</script>


<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}
router-link.get-started,a.get-started{
    background-color: #fff;
    color: red;
    font-size: 18px;
    font-family: 'Noto-sans',sans-serif;
    padding: 10px;
    border-radius: 20px;
    text-decoration:none;
    font-weight: 700;
    margin: 20px;
}
a.get-started:hover{
    background-color: red;
    color: #fff;
}
.logo{
  background-color: #fff;
  width: 31.2%;
  height: 150px;
  padding-top: 30px;
}
.login{
    background-color: #2dc4b6;
    padding: 40px;
}
#root{
  padding-top:70px;
}

input{
  border-radius: 25px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid rgb(77, 66, 66);
}
input::placeholder{
  color: #2dc4b6;
  font-size: 12px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
}
p{
  color: #fff;
  font-size:18px; 
  margin-top: 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
@media (max-width: 420px) {
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#root{

    background-color: #fff
}
router-link.get-started,a.get-started{
    background-color: #fff;
    color: red;
    font-size: 18px;
    font-family: 'Noto-sans',sans-serif;
    padding: 10px;
    border-radius: 20px;
    text-decoration:none;
    font-weight: 700;
    width: 100%;
}
a.get-started:hover{
    background-color: red;
    color: #fff;
}
.logo{
    background-color: #fff;
    width: 30%;
    height: auto;
    padding-top: 40px;
  }
.login{
    background: linear-gradient(to top, #2dc4b6 0%, #2dc4b6 85%, white 14%, white 100%);
    padding: 40px;
    height: 500px;
}
#root{
  padding-top:20px;
}

input{
  border-radius: 25px;
  padding: 22px 15px;
  margin-bottom: 15px;
  border: 1px solid rgb(77, 66, 66);
}
input::placeholder{
  color: #2dc4b6;
  font-size: 12px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
}
p{
  color: #fff;
  font-size:18px; 
  margin-top: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
}
</style>