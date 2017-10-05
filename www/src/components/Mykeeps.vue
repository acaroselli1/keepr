<template class="all">
    <div> 
      <userdash></userdash>
      <h1>My<span class="k">k</span>eeps</h1>
        <!-- <button class="btn btn-primary" @click="logoutUser">Logout</button>
        <li><router-link class ="browse" to="/userdash">Dashboard</router-link></li>  -->
      <form @submit.prevent="createKeep()">
          <p>
          <input class="formcss" type="text" v-model="keepname" placeholder="Keep Name">
          
          <input class="formcss" type="text" v-model="keepdescription" placeholder="Keep Description">
          
          <input class="formcss" type="text" v-model="keepUrl" placeholder="Keep Img or Video Url">

          <!-- <input class="formcss" type="text" v-model="vaultName" placeholder= "Vault Name"> -->
          <span class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Optional Vault Storage ...
                      <span class="caret"></span></button>
              <ul class="dropdown-menu">
                  <div v-for="vault in vaults">
                      <span id ="vaultNames" @click="setKeepToVault(vault._id)">{{vault.name }}</span>
                  </div>
              </ul>
          </span>

          <button class = "btn btn-primary">Make Public</button>
          </p>
        <button class="btn btn-primary vault">Create Keep</button>
      </form>

     
     
   
   <!--<div v-if="see">
        <div class="boards" v-for="keep in keeps">
          <span @click="getKeeps(keep._id)">
        <router-link class="vaultcolor" :to="'/keeps/'+ keep._id">{{keep.name}}</router-link> 
        </span>
          <span @click="removeKeep(keep)"><button class="red btn btn-primary">x</button></span>
        </div>
      </div>-->
      <div class="container">
        <div class="row" >
          <div class="col-xs-2" v-for ="keep in keeps"> 
            <div class="card" style="width: 20rem;" >
              <img class="card-img-top alt" :src ="keep.imgUrl" width ="190rem" height= "150rem" alt='click "Link" for video'>
              <div class="card-body">
                <h4 class="card-title">{{keep.name}}</h4>
                <p class="card-text">{{keep.description}}</p>
                <a :href="keep.imgUrl" class="btn btn-primary link">Link</a><span @click="removeKeep(keep)"><button class="btn btn-primary remove">x</button></span> 
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
    name: 'mykeeps',
    data() {
      return {
        keepname:'',
        keepdescription:'',
        keepUrl:'',
        vaultName:'',
        // name: '',
        // description: '',
        see: true,
        seen: false,
        unameSeen: false
      }
    },
    mounted() {
      this.$store.dispatch('getVaults')
      this.$store.dispatch('getKeeps')

    },
    computed: {
     
      keeps() {
        return this.$store.state.keeps 
      },
      vaults() {
        return this.$store.state.vaults
      },
    },
    components: {
           userdash
           
    },

    methods: {
      createVault() {
        this.$store.dispatch('createVault',
          {
            name: this.name,
            description: this.description,
            creatorId: this.$store.state.user._id
          }

        )
        this.name = '';
        this.description = '';
        

      },

      createKeep() {
        this.$store.dispatch('createKeep',
          {
            name: this.keepname,
            description: this.keepdescription,
            imgUrl:this.keepUrl,
            creatorId: this.$store.state.user._id
          }

        )
        this.name = '';
        this.description = '';
        this.imgUrl = '';
        this.creatorId = '';

      },

      removeKeep(keep) {
        this.$store.dispatch('removeKeep', keep)
      },


      removeVault(vault) {
        this.$store.dispatch('removeVault', vault)
      },
      //   showVaults() {
      //     if (this.see) {

      //     }
      //   },
      getKeeps(id){
       this.$store.dispatch('getKeeps', id)
      },

      getVault(id) {
        this.$store.dispatch('getVault', id)
      },
      showSignup() {
        if (this.unameSeen) {
          this.showLogin()
        }
        this.seen = !this.seen
      },
      showLogin() {
        if (this.seen) {
          this.showSignup()
        }
        this.unameSeen = !this.unameSeen
      },
      loginUser() {
        this.$store.dispatch('login', this.user)
      },
      logoutUser() {
        this.$store.dispatch('logout')
      },
      setKeepToVault(vaultId) {
        keep.vaultId = vaultId       
        
      this.$store.dispatch('setKeepToVault', keep)
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

  .k, .vaultcolor {
    color: skyblue;
    text-shadow: 1px 1px 8px blue;
    text-decoration:none;
  }

  input {
    color: black;
  }

  /* div {
    margin: -8px -16px -8px -8px;
    color: white;
  } */

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
  .card{
    border: 5px solid grey;
    border-radius:15px;
  }

  img{
    border-top-right-radius:10px;
    border-top-left-radius:10px;
  }
  .remove{
   opacity:0;
  }

  .card:hover .remove{
  opacity:1;
  }

  .link{
  opacity:0;
  }

  .card:hover .link{
  opacity:1;
  }

  .alt{
    color:skyblue;
  }

  .dropdown{
   margin-bottom:2vh;   
  }

  #vaultNames{
    color:black;
    font-weight:bold;
  }
</style>