import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [
      {
        name: "bvm_blasters",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_blaster.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_gs_11",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_gs_11.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_knight_riders",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_knight_riders.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_legends",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_legends.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_pakhtoon",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_pakhtoon.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_stars",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_stars.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_strikers",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_strikers.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_super_kings",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_super_kings.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_thunder",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_thunder.png",
        balance: 10000,
        players: []
      },
      {
        name: "bvm_tigers",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_tigers.png",
        balance: 10000,
        players: []
      }
    ]
  },
  mutations: {
    updateTeams(teams) {
      this.teams = teams
    }
  },
  actions: {

  }
})
