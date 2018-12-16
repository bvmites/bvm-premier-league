<template>
  <div id="team">
    <div class="heading">{{team.name}}</div>
    <div class="heading" v-if="team.players.length === 0">There are no players in this team yet</div>
    <b-row>
      <b-col v-for="player in team.players">
        <div class="player-card mx-auto" >
          {{player.name}}
        </div>
      </b-col>
    </b-row>
    <button class="close" @click="$emit('closeTeam')">X</button>
    <div class="bal">
      <img src="../assets/coins.svg" alt="wallet" class="wallet">
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

    }
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
#team
  position: absolute
  background: rgba(255,255,255,0.8)
  top: 5%
  left: 10%
  height: 60%
  width: 80%
  border-radius: 10px
  box-shadow: 5px 5px 5px #333
  transition: all 0.3s linear

.close
  position: absolute
  background: transparent
  font-weight: bolder
  top: 1%
  right: 1%

.heading
  color: black

.player-card
  background: white
  padding: 10px
  margin-top: 40px
  margin-left: 10px
  margin-right: 10px
  width: 200px
  box-shadow: 3px 3px 3px #333
  text-align: center
  font-weight: bolder

.bal
  position: absolute
  right: 5%
  bottom: 2%
  font-size: 24px
  font-weight: bolder
  .wallet
    height: 24px
    margin: 10px

</style>