import Vue from 'vue'
import Vuex from 'vuex'
import playersJSON from './player'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        teams: [
            {
                name: "BVM Spartans",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/1.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM POWER HITTERS",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/2.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM MAVERICKS",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/3.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Roaring Lions",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/4.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Rising Stars",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/5.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM FORTUNE GIANTS",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/6.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Strikers",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/7.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Stars",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/8.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Bulls",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/9.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Fighters",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/10.png",
                balance: 10000,
                players: []
            },
            {
                name: "BVM Royal Strikers",
                url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/team/11.png",
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
            const last = state.players.pop();
            state.players = [last].concat(state.players)
        },
        nextPlayer(state) {
            const first = state.players.shift();
            state.players = state.players.concat(first)
        },
        removePlayer(state) {
            state.players.shift()
        },
        addPlayer(state, player) {
            state.players.push(player)
        },
        removeTeamPlayer(state, obj) {
            let player = obj.player;
            let team = obj.team;
            let teamIndex = state.teams.indexOf(team);
            let playerIndex = state.teams[teamIndex].players.indexOf(player);
            state.teams[teamIndex].players.splice(playerIndex, 1);
            state.players.push(player.playerObj);
            state.teams[teamIndex].balance += parseInt(player.bidAmount)
        },
        updateState(state, newState) {
            state.teams = newState.teams;
            state.players = newState.players
        }
    },
    actions: {}
})
