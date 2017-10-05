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
                    <div class="panel-body">Panel Content</div>     
                    
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
        components: {
           userdash
           
        },
        computed: {
            vault() {
                return this.$store.state.activeVault
            }
            // boards() {
            //     return this.$store.state.boards
            // },
            // lists() {
            //     return this.$store.state.lists
            // }
        }
        //   methods: {
        //       createList() {
        //         this.$store.dispatch('createList', this.list)
        //      }
        // }
    }

</script>

<style scoped>
    .panel-heading {
    background-color:black; 
    border-bottom:2px solid grey; 
    }
    .panel-body{
    background-color:black; 
    }
    .panel{
        border:2px solid grey;
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
        color:white;
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
</style>