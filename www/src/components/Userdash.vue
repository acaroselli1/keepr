<template class="all">

  <div>
      <h1><span>k</span>eepr Dashboard</h1>
      
      <div class="heading">
        <button class="btn btn-primary" @click="logoutUser">Logout</button>
        <li><router-link class ="browse" to="/mainsearch">Browse</router-link></li>
        <li><router-link class ="vaults" to="/mainsearch">MyVaults</router-link></li>
        <li><router-link class ="keeps" to="/mainsearch">MyKeeps</router-link></li>

      </div>
    </div>  
</template>

<script>
  import { store } from '../store'
  export default {
    name: 'userdash',
    data() {
      return {
       
      }
    },
   
   
    methods: {
    

     

      logoutUser() {
        this.$store.dispatch('logout')
      }
    },
    props: {
      flag: true //possibly use for login/create new user
    }
  }

</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
    margin-bottom:5vh;
    padding-top:5vh;
  }
  
  form{
    margin-top:10vh;
  } 
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-left: 1vw;
  }

  li,
  .browse {
    color: grey;
    text-decoration: none;
  }

  li:hover,
  .browse:hover, .keeps:hover, .vaults:hover {
    color: white;
  }

  span, .vaultcolor {
    color: skyblue;
    text-shadow: 1px 1px 8px blue;
    text-decoration:none;
  }

  input {
    color: black;
  }

  img {
    padding-top: 7vh;
  }

  div {
    margin: -8px -16px -8px -8px;
    color: white;
  }

  .vault{
    margin-bottom:5vh;
  }
  .vaults,.keeps{
    text-decoration:none;
    color:grey;
  }
  .vaultcolor:hover{
   color:white;
  }
</style>