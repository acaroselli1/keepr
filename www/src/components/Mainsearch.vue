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
        <div class="col-xs-2" v-for="keep in keeps">
          <div class="card" style="width: 20rem;">

            <img class="card-img-top alt" :src="keep.imgUrl" width="190rem" height="150rem" alt="click 'View' for link">
            <div class="card-body">

              <h4 class="card-title">{{keep.name}}</h4>
              <p class="card-text">{{keep.description}}</p>
              <p class="card-text">Views: {{keep.count}}</p>
              <button @click="addToCount(keep)" class="btn btn-primary link">View</button>
              <span class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Vault Location ...
                      <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <div v-for="vault in vaults">
                  <span id="vaultNames" @click="setKeepToVault(keep, vault._id)">{{vault.name}}</span>
                </div>
              </ul>
              </span>

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

    components: {
      userdash
    },

    methods: {
      logout() {
        this.$store.dispatch('logout')
      },

      loggedIn() {
        location.reload();
      },

      addToCount(keep) {
        keep.count++;
        this.$store.dispatch('updateViews', keep);
      },
      setKeepToVault(keep, vaultId) {
        keep.vaultId.push(vaultId);
        this.$store.dispatch('updateKeep', keep)
      }


    },
    computed: {
      vaults() {
        return this.$store.state.vaults
      },
      keeps() {
        return this.$store.state.keeps
      }
    },
    mounted() {
      this.$store.dispatch('getPublicKeeps')

    },

    //  updated(){                                 //comment this out to increment counter - though not persistent
    //   this.$store.dispatch('getPublicKeeps')

    // }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
    color: white;
    padding-top: 10vh;
    margin-top: 8px;
    margin-bottom: 7vh;
  }

  span:hover {
    color: white;
  }

  span {
    color: grey;
    text-shadow: 1px 1px 8px blue;
  }
  /* button {
    display: flex;
    justify-content: flex-start;
  } */

  .card {
    border: 5px solid grey;
    border-radius: 15px;
  }

  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  p {
    margin-top: 3vh;
  }

  .login {
    margin-left: 2vw;
  }

  .logout {
    margin-right: 2vw;
  }

  .k {
    color: skyblue;
  }

  .remove {
    opacity: 0;
  }

  .card:hover .remove {
    opacity: 1;
  }

  .link {
    opacity: 0;
  }

  .card:hover .link {
    opacity: 1;
  }

  .dropdown {
    margin-bottom: 2vh;
  }

  #vaultNames {
    color: black;
    font-weight: bold;
  }
</style>