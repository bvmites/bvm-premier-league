<!--suppress ALL -->
<template>
  <div id="home">

    <div v-if="smallWindow" class="smallWindow">
      Cannot be viewed in smaller screens. Turn to a display with width greater than 1485px. Or just press ctrl+'-' to decrease viewport
    </div>

    <div v-if="!smallWindow">
      <!--Players-->
      <div class="main" v-if="players.length > 0">
        <transition name="slide">
          <cardComponent v-for="(player,playerIndex) in players"
                         :player="player"
                         :key="player._id"
                         v-if="playerIndex === index"
                         @setFlag="setFlag"></cardComponent>
        </transition>
        <button class="prev" @click="prevPlayer"><</button>
        <button class="next" @click="nextPlayer">></button>
      </div>

      <!--Restore Button-->
      <button class="restore" @click="getState"></button>

      <!--No Player Info-->
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
  </div>
</template>

<script>

  import cardComponent from '../components/cardComponent'
  import teamComponent from '../components/teamComponent'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {
      cardComponent,
      teamComponent
    },
    data() {
      return {
        index: 0,
        flag: false,
        show: false,
      teamDetails: null,
      smallWindow: false
    }
  },
  computed: {
    ...mapState({
      players: state => state.players,
      teams: state => state.teams
    })
  },
  methods: {
    prevPlayer() {
      this.$store.commit('prevPlayer')
    },
    nextPlayer() {
      if(this.flag) {
        this.$store.commit('removePlayer')
        this.flag = false
        let imgs = document.querySelectorAll(".team")
        imgs.forEach(img => {
          img.style.display = 'block'
        })
        document.querySelector(".center-animate").style.display = 'none'
      }
      else
          this.$store.commit('nextPlayer')
      console.log(this.$store.state)
      this.$http.post("https://dry-cove-40250.herokuapp.com/cric/store", this.$store.state)
    },
    setFlag() {
      this.flag = true
    },
    showTeamDetails(team) {
      this.show = !this.show
      this.teamDetails = team
    },
    getState() {
      this.$http.get("https://dry-cove-40250.herokuapp.com/cric/store").then(function (response) {
        this.$store.commit('updateState', response.body[0])
      })
    },
    checkViewport() {
      if(window.innerWidth < 1485)
        this.smallWindow = true
      else
        this.smallWindow = false
    }
  },
  created() {
    window.addEventListener('resize', this.checkViewport)
  }
}

</script>

<style lang="sass" scoped>
@import '../sass/home'

</style>