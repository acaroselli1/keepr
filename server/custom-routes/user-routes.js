var express = require('express')
var router = express.Router()
var user = require('../models/user')
let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

module.exports = router


module.exports = {
  userVaults: {
    path: '/uservaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Vaults'
      Vaults.find({creatorId: req.session.uid})
        .then(vaults => {
          console.log("vaults: ",vaults);
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  userKeeps: {
    path: '/userkeeps',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Keeps'
      Keeps.find({creatorId: req.session.uid})
        .then(keeps => {
          console.log("keeps: ",keeps);
          res.send(handleResponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  publicKeeps: {
    path: '/publickeeps',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Public Keeps'
      Keeps.find({public: true})
        .then(keeps => {
          console.log("keeps: ",keeps);
          res.send(handleResponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },



  // sharedBoards: {
  //   path: '/sharedBoards',
  //   reqType: 'get',
  //   method(req, res, next){
  //     Boards.find({collaborators: { $in: req.session.uid}})
  //       .then(boards => {
  //         res.send(handleResponse(action, boards))
  //       }).catch(error => {
  //         return next(handleResponse(action, null, error))
  //       })
  //   }
  // }
  vaultForKeep: {
    path: '/vaults/:vaultId/keeps',
    reqType: 'post',
    method(req, res, next) {
      let action = 'Assign Keep to Vault'
      Vaults.findOne({_id : req.params.vaultId})
        .then(vault => {
          var keep =req.body;
          keep.vaultId = vault._id;
          Keeps.create(keep)
          res.send(handleResponse(action, vault))
        })
        .catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  addKeepToVault: {
    path: '/addkeeptovault/:keepId',
    reqType: 'put',
    method(req, res, next) {
      let action = 'Assign Keep to Vault'
      Keeps.findById({_id : req.body._id})
        .then(keep => {
          keep.vaultId.push(req.body.vaultId);
        })
        .catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },


  vaultKeeps: {
    path: '/vaults/:vaultId/keeps',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Vault Keeps'
      Keeps.find({ vaultId: {$in:[req.params.vaultId]}})
        .then(keeps => {
          res.send(handleResponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }



}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }  