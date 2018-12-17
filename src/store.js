import Vue from 'vue'
import Vuex from 'vuex'
import playersJSON from './player'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [
      {
        name: "BVM Blasters",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_blaster.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM GS 11",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_gs_11.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Knight Riders",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_knight_riders.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Legends",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_legends.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Pakhtoon",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_pakhtoon.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Stars",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_stars.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Strikers",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_strikers.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Super Kings",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_super_kings.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Thunder",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_thunder.png",
        balance: 10000,
        players: []
      },
      {
        name: "BVM Tigers",
        url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_tigers.png",
        balance: 10000,
        players: []
      }
    ],
    players: playersJSON.players
  },
  mutations: {
    updateTeams(state, teams) {
      state.teams = teams
    },
    prevPlayer(state) {
      const last = state.players.pop()
      state.players = [last].concat(state.players)
    },
    nextPlayer(state) {
      const first = state.players.shift()
      state.players = state.players.concat(first)
    },
    removePlayer(state) {
      state.players.shift()
    },
    addPlayer(state, player){
      state.players.push(player)
    },
    removeTeamPlayer(state, obj) {
      let player = obj.player
      let team = obj.team
      let teamIndex = state.teams.indexOf(team)
      let playerIndex = state.teams[teamIndex].players.indexOf(player)
      state.teams[teamIndex].players.splice(playerIndex, 1)
      state.players.push(player.playerObj)
      state.teams[teamIndex].balance += parseInt(player.bidAmount)
    },
    updateState(state, newState) {
      state.teams = newState.teams
      state.players = newState.players
    }
  },
  actions: {

  }
})
