<template class="all">
<div>
        <userdash></userdash>
        <h1>MyVaults</h1>
    
        <!--<button class="btn btn-primary" @click="logoutUser">Logout</button>
        <li><router-link class ="browse" to="/userdash">Dashboard</router-link></li>--> 
     

      <form @submit.prevent="createVault()">
        <input class="formcss" type="text" v-model="name" placeholder="Vault Name">
        <p>
          <input class="formcss" type="text" v-model="description" placeholder="Vault Description">
        </p>
        <button class="btn btn-primary vault">Create Vault</button>
      </form>


      <div v-if="see">
        <div class="boards" v-for="vault in vaults">
          <span @click="getVault(vault._id)">
        <router-link class="vaultcolor" :to="'/vault/'+vault._id">{{vault.name}}</router-link> <!--{{board.description}}-->
        </span>
          <span @click="removeVault(vault)"><button class="red btn btn-primary">x</button></span>
        </div>
      </div>
    
  </div>
</template>

<script>
  import userdash from './userdash' 
  import { store } from '../store'
  export default {
    name: 'myvaults',
    data() {
      return {
        keepname:'',
        keepdescription:'',
        keepUrl:'',
        vaultName:'',
        name: '',
        description: '',
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
      vaults() {
        return this.$store.state.vaults
      },
      keeps() {
        return this.$store.state.keeps 
      }
    
    },
    components:{
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