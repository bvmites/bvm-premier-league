<template>
  <div id="register">
    <div class="heading">Register team player</div>
    <div class="form container">

      <!--Name-->
      <b-form-group>
        <span class="label">Name</span>
        <b-form-input v-model="player.name" placeholder="Name"></b-form-input>
      </b-form-group>

      <!--College ID-->
      <b-form-group>
        <span class="label">College ID</span>
        <b-form-input v-model="player.collegeID" placeholder="College ID"></b-form-input>
      </b-form-group>

      <!--Department-->
      <b-form-group>
        <span class="label">Department</span>
        <b-form-select :options="departmentOptions" v-model="player.department"></b-form-select>
      </b-form-group>

      <!--Year-->
      <b-form-group>
        <span class="label">Year</span>
        <b-form-select :options="yearOptions" v-model="player.year"></b-form-select>
      </b-form-group>

      <!--Contact No-->
      <b-form-group>
        <span class="label">Contact No.</span>
        <b-form-input v-model="player.phone" placeholder="Contact No." type="number"></b-form-input>
      </b-form-group>

      <!--Image-->
      <b-form-group>
        <span class="label">Image</span>
        <b-form-file v-model="image" placeholder="Select Image"></b-form-file>
      </b-form-group>

      <!--Category-->
      <b-form-group>
        <span class="label">Category</span>
        <div class="sub-group">

          <!--BatHand-->
          <b-form-group>
            <b-form-row>
              <span class="label">Batsman</span>
              <b-form-radio-group v-model="player.category.batHand">
                <div class="options">
                  <b-form-radio value="right">Right</b-form-radio>
                  <b-form-radio value="left">Left</b-form-radio>
                </div>
              </b-form-radio-group>
            </b-form-row>
          </b-form-group>

          <!--bolHand-->
          <b-form-group>
            <b-form-row>
              <span class="label">Bowler</span>
              <b-form-radio-group v-model="player.category.bolHand">
                <div class="options">
                  <b-form-radio value="right">Right</b-form-radio>
                  <b-form-radio value="left">Left</b-form-radio>
                </div>
              </b-form-radio-group>
            </b-form-row>
          </b-form-group>

          <!--bolType-->
          <b-form-group>
            <b-form-row>
              <span class="label">Bowler Type</span>
              <b-form-radio-group v-model="player.category.bolType">
                <div class="options">
                  <b-form-radio value="fast">Fast</b-form-radio>
                  <b-form-radio value="medium">Medium</b-form-radio>
                  <b-form-radio value="off-spin">off Spin</b-form-radio>
                  <b-form-radio value="leg-spin">Leg Spin</b-form-radio>
                </div>
              </b-form-radio-group>
            </b-form-row>
          </b-form-group>

          <!--Wicket Keeper-->
          <b-form-group>
            <b-form-row>
              <span class="label">Wicket Keeper</span>
              <div class="options">
                <b-form-radio-group v-model="player.category.wk">
                  <b-form-radio :value="true">Yes</b-form-radio>
                  <b-form-radio :value="false">No</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-form-row>
          </b-form-group>

          <!--All rounder-->
          <b-form-group>
            <b-form-row>
              <span class="label">All Rounder</span>
              <div class="options">
                <b-form-radio-group v-model="player.category.allRounder">
                  <b-form-radio :value="true">Yes</b-form-radio>
                  <b-form-radio :value="false">No</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-form-row>
          </b-form-group>

          <!--Player Type-->
          <b-form-group>
            <b-form-row>
              <span class="label">Gold</span>
              <div class="options">
                <b-form-radio-group v-model="player.category.gold">
                  <b-form-radio :value="true">Yes</b-form-radio>
                  <b-form-radio :value="false">No</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-form-row>
          </b-form-group>
        </div>
      </b-form-group>

      <!--Submit Button-->
      <b-button class="mx-auto d-block" @click="submit">Submit</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
      image:null,
      departmentOptions: [
        {text: "Select", value: null},
        {text: "Civil", value: "civil"},
        {text: "Mechanical", value: "mech"},
        {text: "Production", value: "prod"},
        {text: "Computer", value: "cp"},
        {text: "IT", value: "it"},
        {text: "EC", value: "ec"},
        {text: "Electrical", value: "ee"},
        {text: "Electronics", value: "el"}
      ],
      yearOptions: [
        {text: "Select", value: null },
        {text: "First", value: '1'},
        {text: "Second", value: '2'},
        {text: "Third", value: '3'},
        {text: "Fourth", value: '4'}
      ],
      player: {
        name: null,
        collegeID: null,
        department: null,
        year: null,
        phone: null,
        photoID: null,
        category: {
          gold: false,
          batHand: null,
          bolHand: null,
          bolType: null,
          wk: false,
          allRounder: false
        }
      }
    }
  },
  methods: {
    submit() {
      this.player.photoID = this.image.name
      this.$http.post("https://bvm-cricket.herokuapp.com/", this.player).then(function(response) {
        this.$router.go()
      })
    }
  }
}
</script>

<style lang="sass" scoped>

#register
  background: -webkit-linear-gradient(-45deg, #e2b963, #6819ad)
  position: absolute
  width: 100%
  min-height: 100%
  padding-bottom: 50px

.heading
  padding-top: 2%

.label
  font-weight: bolder

.sub-group
  padding-left: 50px
  padding-top: 20px

.options
  padding-left: 30px

.btn, .btn:hover, .btn:active, .btn:focus
  background: #e2b963
  border: none
  outline: none

.btn:hover
  background: darken(#e2b963, 10%)
</style>