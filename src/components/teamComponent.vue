<template>
  <div id="team">
    <div class="heading">{{team.name}}</div>
    <div class="heading" v-if="team.players.length === 0">There are no players in this team yet</div>
    <b-row>
      <b-col v-for="player in team.players">
        <div class="player-card mx-auto" >
          <button class="del" @click="deletePlayer(player)">X</button>
          <div class="name">{{player.playerObj.name}}</div>
          <div class="amount"><img :src="baseUrl + 'coins.png'" alt="coins" class="wallet">{{player.bidAmount}}</div>
        </div>
      </b-col>
    </b-row>
    <button class="close" @click="$emit('closeTeam')">X</button>
    <div class="bal">
      <img :src="baseUrl + 'coins.png'" alt="wallet" class="wallet">
      <span>{{team.balance}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'teamComponent',
  props: [
    'team'
  ],
  data() {
    return {
      baseUrl: 'https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/',
    }
  },
  methods: {
    deletePlayer(player) {
      this.$store.commit('removeTeamPlayer', {player, team: this.team})
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/teamComponent'

</style>