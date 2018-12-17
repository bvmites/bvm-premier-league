<template>

  <div id="playerCard">

    <!--player card-->
    <div :class="{'card': true, 'mx-auto': true, 'gold': gold, 'silver': silver,  'bronze': bronze}">
      <div class="img"><img src="../assets/logo.png" alt="player-Image" class="img-fluid mx-auto d-block"></div>
      <div class="content">
        <b-row>
          <b-col><span class="label">Name: </span></b-col>
          <b-col><span class="capitalize">{{player.name}}</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Batsman: </span></b-col>
          <b-col><span class="capitalize">{{player.category.batHand}}</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Bowling: </span></b-col>
          <b-col><span class="capitalize">{{player.category.bolHand}}</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Bowling Type: </span></b-col>
          <b-col><span class="capitalize">{{player.category.bolType}}</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Wicket keeper: </span></b-col>
          <b-col><span v-if="player.category.wk">YES</span><span v-if="!player.category.wk">NO</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">All Rounder: </span></b-col>
          <b-col><span v-if="player.category.allRounder">YES</span><span v-if="!player.category.allRounder">NO</span></b-col>
        </b-row>
      </div>
    </div>

    <!--Team Section-->
    <div class="teams container">
      <b-row>
        <b-col v-for="team in teams">
          <div class="team">
            <img :src="team.url" alt="TeamImg" class="teamImg mx-auto d-block" @click="showModal(team.name, team.url, $event)">
            <div class="bal">
              <img :src="baseUrl + 'coins.png'" alt="wallet" class="wallet">
              <span>{{team.balance}}</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <!--Modal-->
    <div>
      <b-modal ref="amountModal" hide-footer title="Enter Bid Amount">
        <img src="" alt="" class="modal-image mx-auto d-block">
        <b-form-group>
          <b-form-input placeholder="Enter Amount" v-model="amount" type="number" @keyup.enter.native="addPlayer"></b-form-input>
        </b-form-group>
        <b-button class="mx-auto d-block" @click="addPlayer()">Submit</b-button>
      </b-modal>
    </div>
  </div>

</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'cardComponent',
  props: [
    'player'
  ],
  data() {
    return {
      amount: null,
      team: null,
      el: null,
      gold: false,
      silver: false,
      bronze: false,
      baseUrl: 'https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/'
    }
  },
  computed: {
    ...mapState({
      teams: state => state.teams
    })
  },
  created() {
    if(this.player.category.playerType === "gold"){
      this.gold = true
      this.silver = false
      this.bronze = false
    }
    if(this.player.category.playerType === "silver"){
      this.gold = false
      this.silver = true
      this.bronze = false
    }
    if(this.player.category.playerType === "bronze"){
      this.gold = false
      this.silver = false
      this.bronze = true
    }
  },
  methods: {
    showModal(team, url, el) {
      this.team = team
      this.$refs.amountModal.show()
      this.el = el.target.parentElement

      document.getElementsByClassName("modal-image")[0].attributes.src.value = url
      // document.getElementsByClassName("modal-image")[1].attributes.src.value = url
      // document.getElementsByClassName("modal-image")[2].attributes.src.value = url
      // document.getElementsByClassName("modal")[0].parentElement.style.height = '100vh'

    },
    addPlayer() {
      this.teams.forEach(team => {
        if(team.name === this.team){
          team.balance = team.balance - this.amount
          team.players.push({ playerObj: this.player, bidAmount: this.amount})
          this.team = null
          this.amount = null
          this.$refs.amountModal.hide()
          this.$store.commit('updateTeams', this.teams)
          this.$emit('setFlag')
        }
      })
      let imgs = document.querySelectorAll(".team")
      imgs.forEach(img => {
        if(img !== this.el)
          img.style.display = 'none'
      })
      this.el.parentElement.childNodes[0].childNodes[1].style.display = 'none'
      this.el.classList.add('center-animate')
      this.el.childNodes[0].classList.remove('teamImg')
      document.querySelector(".card").style.transform = 'translateX(150px)'
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/cardComponent'

</style>