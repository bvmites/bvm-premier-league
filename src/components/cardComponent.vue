<template>
  <div id="playerCard">
    <div class="card mx-auto">
      <div class="img"><img src="../assets/logo.png" alt="player-Image" class="img-fluid mx-auto d-block"></div>
      <div class="content">
        <b-row>
          <b-col><span class="label">Name: </span></b-col>
          <b-col><span>Player Name</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Batsman: </span></b-col>
          <b-col><span>Batsman Type</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Bowling: </span></b-col>
          <b-col><span>LEFT/RIGHT</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Bowling Type: </span></b-col>
          <b-col><span>Bowling Type</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">Wicket keeper: </span></b-col>
          <b-col><span>YES/NO</span></b-col>
        </b-row>
        <b-row>
          <b-col><span class="label">All Rounder: </span></b-col>
          <b-col><span>YES/NO</span></b-col>
        </b-row>
      </div>
    </div>
    <div class="teams">
      <img v-for="team in teams" :src="team" alt="TeamImg">
    </div>
  </div>
</template>

<script>

export default {
  name: 'cardComponent',
  data() {
    return {
      teams: [
        "../assets/bvm_blaster.png",
        "../assets/bvm_gs_11.png",
        "../assets/bvm_knight_riders.png",
        "../assets/bvm_legends.png",
        "../assets/bvm_pakhtoon.png",
        "../assets/bvm_stars.png",
        "../assets/bvm_strikers.png",
        "../assets/bvm_super_kings.png",
        "../assets/bvm_thunder.png",
        "../assets/bvm_tigers.png",
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.card
  margin: 20px
  min-height: 400px
  width: 300px
  border-radius: 10px
  .content
    padding: 10px
  .label
    font-weight: bolder
  .row
    padding-top: 10px
</style>