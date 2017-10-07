<template>
    <div class="all">
        <userdash></userdash>
        <div class="container">
            <div class="row">
                <div class="board panel">
                    <div class="panel-heading">
                        <h2>{{vault.name}}</h2>
                        <h4>{{vault.description}}</h4>
                    </div>
                    <div class="panel-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-2 vault" v-for="keep in keeps">
                                    <div class="card" style="width:20rem;">
                                        <img class="card-img-top alt" :src="keep.imgUrl" width="190rem" height="150rem" alt='click "Link" for video'>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userdash from './userdash'
    export default {
        name: 'vault',
        data() {
            return {
                // user: {
                //     name: '',
                //     password: '',
                //     email: ''
                // }
                // list: {
                //     name: '',
                //     description: '',
                //     boardId: this.$route.params.boardId
                // }

            }
        },
        // mounted() {
        //     this.$root.$store.dispatch('getListsByBoard', this.$route.params.boardId)
        // },
        mounted() {
            this.$root.$store.dispatch('getKeepsByVault', this.$route.params.vaultId)
        },


        components: {
            userdash

        },
        computed: {
            vault() {
                return this.$store.state.activeVault
            },
            keeps() {
                return this.$store.state.keeps
            }
            // boards() {
            //     return this.$store.state.boards
            // },
            // lists() {
            //     return this.$store.state.lists
            // }

        },
          methods: {
            removeKeep(keep) {
                this.$store.dispatch('removeKeepInVault', keep)
              }
        }
    }

</script>

<style scoped>
    .panel-heading {
        background-color: black;
        border-bottom: 2px solid grey;
    }

    .panel-body {
        background-color: black;
    }

    .panel {
        border: 2px solid grey;
    }

    h1 {
        color: white;
        font-size: 60px;
        font-family: 'Abril Fatface', cursive;
        text-shadow: 0 0 3px gray;
        margin-bottom: 30px;
    }

    .default {
        margin-bottom: 20px;
    }


    h2 {
        color: white;
        font-family: 'Catamaran', sans-serif;
        font-size: 40px;
        text-shadow: 0 0 3px gray;
    }

    button {
        color: black;
        font-family: 'Catamaran', sans-serif;
        font-size: 20px;
    }

    .btncolor {
        color: black;
    }

    h4 {
        font-family: 'Catamaran', sans-serif;
        font-size: 20px;
        color: white;
    }
    img{
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    }
    /* 
    .all {
        background: url('https://wallpapercave.com/wp/j8eMFrM.jpg') no-repeat center center fixed;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100vh;
        margin-top: -5vh;
        padding-top: 5vh;
    } */

    .stuff {
        width: 60rem;
        -moz-border-radius: 2rem;
        -webkit-border-radius: 2rem;
        border-radius: 2rem;
        background: black;
        opacity: 0.8;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .card{
    border: 5px solid grey;
    border-radius:15px;
  }

  .vault{
  margin-left:1.3vw;
  }

  .remove{
      color:white;
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
</style>