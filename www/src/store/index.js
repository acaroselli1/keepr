import vue from 'vue'
import vuex from 'vuex'
// import $ from 'jquery'
import router from '../router'
import axios from 'axios'

let api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: '//localhost:3000/',
  timeout: 2000,
  withCredentials: true
})


vue.use(vuex)





// function CreateAccountExample() {
//   api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
// }

// function loginAndGetDataExample() {
//   api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
// }

// function logout() {
//   api.delete('account/logout')
// }

// function GetDataExample() {
//   api('values').then(d => {
//     console.log("Values Controller Data:", d)
//   }).catch(err => {
//     console.error(err)
//   })
// }

// function getAuth(){
//   api('account').then(res => {
//     console.log("Auth Response", res)
//   })
// }

// // loginAndGetDataExample()
// getAuth()

































var store = new vuex.Store({
  state: {
    user: {},
    vaults: {},
    keeps:{},
    activeVault: {},
    error: {}

  },









  mutations: {

    setUser(state, data) {
      state.user = data
    },

    createUser(state, data) {
      state.user = data
    },

    logoutUser(state, data) {
      state.user = {}
    },

    setVaults(state, data) {
      state.vaults = data
    },

    setActiveVault(state, data) {
      //console.log(data)
      state.activeVault = data
    },
    
    // keeps mutations

    setKeeps(state, data) {
      state.keeps = data
    },

    setKeepsByVault(state,data){
      state.keeps = data
    },

    handleError(state, err) {
      state.error = err
    }


  },

























  actions: {
     //Keep Actions
     setKeepToVault({ commit, dispatch }, keep) {
      // let updatedTask = updater.task
      // updatedTask.listId = updater.updatedId
      api.put('/keeps/' + keep._id, keep)
      .then(res => {
        dispatch('getKeepsByVault', keep)

        // updater.task.listId = updater.oldId
        // dispatch('getTasksByList', updater.task)
      })
      .catch(err => {
        commit('handleError', err)
      })
    },
     getKeepsByVault({ commit, dispatch }, vaultId) {
      api('vaults/'+ vaultId + '/keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
          console.log("In the store, in function getKeepsByVault", res.data.data);
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getKeeps({ commit, dispatch }, id) {
      api('keeps')
        .then(res => {
          commit('setKeeps', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createKeep({ commit, dispatch }, keep) {
      api.post('keeps', keep)
        .then(res => {
          dispatch('getKeeps')
        })
        .catch(err => {
          commit('handleError', err)
        })

    },
    removeKeep({ commit, dispatch }, keep) {
      api.delete('/keeps/' + keep._id)
        .then(res => {
          dispatch('getKeeps')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getUserKeeps({ commit, dispatch }) {
      api('userkeeps')
        .then(res => {
          commit('setKeeps', res.data.data)
          console.log(res.data.data);
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getPublicKeeps({ commit, dispatch }) {
      api('publickeeps')
        .then(res => {
          commit('setKeeps', res.data.data)
          console.log(res.data.data);
        })
        .catch(err => {
          commit('handleError', err)
        })
    },


    //Vault Actions
    getVaults({ commit, dispatch }) {
      api('uservaults')
        .then(res => {
          commit('setVaults', res.data.data)
          console.log(res.data.data);
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getVault({ commit, dispatch }, id) {
      api('vaults/' + id)
        .then(res => {
          commit('setActiveVault', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createVault({ commit, dispatch }, vault) {
      console.log("Vault: ", vault)
      api.post('vaults/', vault)
        .then(res => {
          dispatch('getVaults')
        })
        .catch(err => {
          //commit('handleError', err)
        })

    },
    removeVault({ commit, dispatch }, vault) {
      api.delete('vaults/' + vault._id)
        .then(res => {
          dispatch('getVaults')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    },
    












    //User Actions



    createUser({ commit, dispatch }, user) {
      console.log("before post user", user);
      auth.post("register", user).then(res => {
        console.log("after post res", res);
        if (res.data.data) {
          router.push('/mainsearch')
        }
        commit('createUser', res.data.data)
      })
    },


    authenticate({ commit, dispatch }) {
      auth('authenticate').then(res => {
        console.log("authenticate?", res)
        if (!res.data.data) {
          return router.push('/')
        }
        commit('setUser', res.data.data)
        router.push('/userdash')
      })
        .catch(err => {
          //commit('handleError', err)
          router.push('/')
        })
    },

    login({ commit, dispatch }, user) {
      auth.post("login", user).then(res => {
        console.log("login?", res)
        if (res.data.data) {
          router.push('/mainsearch')
        } else if (res.data.error) {
          alert('Invalid Username or Password')
        }

        commit('setUser', res)
      })
        .catch(err => {
          commit('handleError', err)
        })
    },

    logout({ commit, dispatch }) {
      auth.delete("logout").then(res => {
        if (!res.data.data) {
          return router.push('/')
        }
        commit('logoutUser', res)
      })
        .catch(err => {
          commit('handleError', err)
        })
    }



  }
})

export default store
