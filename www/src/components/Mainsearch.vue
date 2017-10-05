<template>
  <div class="mainsearch">
    <userdash></userdash>
    <!--<router-link to="/"><button class="btn btn-primary pull-left login">Login - Register</button></router-link>
    <p>
    <router-link to="/"><span @click ="loggedIn">Dashboard</span><button @click="logout()" class="btn btn-primary pull-right logout">Logout</button></router-link>
    </p>-->
    <h1><span class="k">k</span>eepr Main List</h1>
    <div class="container">
      <div class="row">
        <div class="col-xs-3">
          <div class="card" style="width: 20rem;">
            <img class="card-img-top" src ="https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg" width ="190rem" height= "150rem" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title">Elephant</h4>
              <p class="card-text">A gentle giant.</p>
              <a href="https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg" class="btn btn-primary">Keep</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  import userdash from './userdash' 
  import { store } from '../store'
  export default {
    name: 'mainsearch',
    data() {
      return {


      }
    },

    //  mounted(){
    //   $.get('/api/').then(data => {
    //     this.students = data
    //   })
    // },

     components:{
      userdash
      },
   
      methods: {
      logout() {
        this.$store.dispatch('logout')
      },

      loggedIn(){
        location.reload();
      }
     

    }




  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
    color: white;
    padding-top: 10vh;
    margin-top:8px;
  }

  span:hover{
    color:white;
  }

  span {
    color: grey;
    text-shadow: 1px 1px 8px blue;

  }

  button {
    display: flex;
    justify-content: flex-start;
  }

  .card{
    border: 5px solid grey;
    border-radius:15px;
  }

  img{
    border-top-right-radius:10px;
    border-top-left-radius:10px;
  }

  p{
    margin-top:3vh;
  }

  .login{
  margin-left:2vw; 
  }

  .logout{
  margin-right:2vw;  
  }

  .k{
    color:skyblue;
  }
</style>