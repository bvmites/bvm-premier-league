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
    <div class="teams container">
      <b-row>
        <b-col v-for="team in teams">
          <img :src="team.url" alt="TeamImg" class="teamImg mx-auto d-block" @click="showModal(team.name, team.url)">
        </b-col>
      </b-row>
    </div>
    <!--Modal-->
    <div>
      <b-modal ref="amountModal" hide-footer title="Enter Bid Amount">
        <img src="" alt="" class="modal-image mx-auto d-block">
        <b-form-group>
          <b-form-input placeholder="Enter Amount"></b-form-input>
        </b-form-group>
        <b-button class="mx-auto d-block">Submit</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>

export default {
  name: 'cardComponent',
  data() {
    return {
      teams: [
        {
          name: "bvm_blasters",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_blaster.png"
        },
        {
          name: "bvm_gs_11",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_gs_11.png"
        },
        {
          name: "bvm_knight_riders",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_knight_riders.png"
        },
        {
          name: "bvm_legends",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_legends.png"
        },
        {
         name: "bvm_pakhtoon",
         url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_pakhtoon.png"
        },
        {
          name: "bvm_stars",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_stars.png"
        },
        {
          name: "bvm_strikers",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_strikers.png"
        },
        {
          name: "bvm_super_kings",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_super_kings.png"
        },
        {
          name: "bvm_thunder",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_thunder.png"
        },
        {
          name: "bvm_tigers",
          url: "https://raw.githubusercontent.com/bvmites/bvm-premier-league/master/src/assets/bvm_tigers.png"
        }
      ]
    }
  },
  methods: {
    showModal(team, url) {
      this.$refs.amountModal.show()
      document.getElementsByClassName("modal-image")[0].attributes.src.value = url
      document.getElementsByClassName("modal-image")[1].attributes.src.value = url
      document.getElementsByClassName("modal-image")[2].attributes.src.value = url
      document.getElementsByClassName("modal")[0].parentElement.style.height = '100vh'

    }
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

.container
  max-width: 740px

.teamImg
  height: 110px
  margin: 10px
  cursor: pointer
  transition: all 0.2s ease-in-out
  opacity: 0.6

.teamImg:hover
  transform: scale(1.3)
  opacity: 1

.modal-image
  padding: 15px

</style>