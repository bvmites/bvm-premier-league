<template>
  <div id="home" @keyup.esc="console.log('keypressed')">

    <!--Players-->
    <div class="main" v-if="players.length > 0">
      <transition name="slide">
        <cardComponent v-for="(player,playerIndex) in players"
                       :player="player"
                       :key="player.id"
                       v-if="playerIndex === index"
                       @setFlag="setFlag"></cardComponent>
      </transition>
      <button class="prev" @click="prevPlayer"><</button>
      <button class="next" @click="nextPlayer">></button>
    </div>

    <div class="typing" v-if="players.length === 0">No more players to bid. Click on the icons present in dock to see team details.</div>

    <!--Team Details-->

    <transition name="openUp">
      <teamComponent v-if="show" @closeTeam="show = false" :team="teamDetails"></teamComponent>
    </transition>


    <!--Team Dashboard-->
    <div class="team-dashboard">
      <div class="team-icon" v-for="team in teams">
        <img :src="team.url" alt="teamImg" class="teamImg" @click="showTeamDetails(team)">
        <span class="players">{{team.players.length}}</span>
        <div class="oval"></div>
      </div>
      <div class="dashboard"></div>
    </div>
  </div>
</template>

<script>
import cardComponent from '../components/cardComponent'
import playersJSON from '../player'
import teamComponent from '../components/teamComponent'

export default {
  name: 'Home',
  components: {
    cardComponent,
    teamComponent
  },
  data() {
    return {
      players: [],
      index: 0,
      flag: false,
      teams: this.$store.state.teams,
      show: false,
      teamDetails: null
    }
  },
  methods: {
    prevPlayer() {
      const last = this.players.pop()
      this.players = [last].concat(this.players)

    },
    nextPlayer() {
      if(this.flag) {
        this.players.shift()
        console.log(this.players)
        this.flag = false
        let imgs = document.querySelectorAll(".team")
        imgs.forEach(img => {
          img.style.display = 'block'
        })
        document.querySelector(".center-animate").style.display = 'none'
      }
      else{
          const first = this.players.shift()
          this.players = this.players.concat(first)
      }
    },
    setFlag() {
      this.flag = true
    },
    showTeamDetails(team) {
      this.show = !this.show
      this.teamDetails = team
    }
  }
}

</script>

<style lang="sass" scoped>
@import '../sass/home'

</style>