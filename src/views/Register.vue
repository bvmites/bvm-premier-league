<template>
  <div id="register">
    <div class="heading">Register team player</div>
    <div class="form container">
      <b-form-group>
        <span class="label">Name</span>
        <b-form-input v-model="player.name" placeholder="Name"></b-form-input>
      </b-form-group>
      <b-form-group>
        <span class="label">College ID</span>
        <b-form-input v-model="player.collegeId" placeholder="College ID"></b-form-input>
      </b-form-group>
      <b-form-group>
        <span class="label">Department</span>
        <b-form-select :options="departmentOptions" v-model="player.department"></b-form-select>
      </b-form-group>
      <b-form-group>
        <span class="label">Year</span>
        <b-form-select :options="yearOptions" v-model="player.year"></b-form-select>
      </b-form-group>
      <b-form-group>
        <span class="label">Contact No.</span>
        <b-form-input v-model="player.contact" placeholder="Contact No." type="number"></b-form-input>
      </b-form-group>
      <b-form-group>
        <span class="label">Category</span>
        <div class="sub-group">
          <b-form-group>
            <b-form-row>
              <span class="label">Batsman</span>
              <b-form-radio-group v-model="player.batsman">
                <div class="options">
                  <b-form-radio value="right">Right</b-form-radio>
                  <b-form-radio value="left">Left</b-form-radio>
                </div>
              </b-form-radio-group>
            </b-form-row>
          </b-form-group>
          <b-form-group>
            <b-form-row>
              <span class="label">Bowler</span>
              <b-form-radio-group v-model="player.bowlerHand">
                <div class="options">
                  <b-form-radio value="right">Right</b-form-radio>
                  <b-form-radio value="left">Left</b-form-radio>
                </div>
              </b-form-radio-group>
            </b-form-row>
          </b-form-group>
          <b-form-group>
            <b-form-row>
              <span class="label">Bowler Type</span>
              <b-form-checkbox-group v-model="player.bowlerType">
                <div class="options">
                  <b-form-checkbox value="fast">Fast</b-form-checkbox>
                  <b-form-checkbox value="medium">Medium</b-form-checkbox>
                  <b-form-checkbox value="off-spin">off Spin</b-form-checkbox>
                  <b-form-checkbox value="leg-spin">Leg Spin</b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-form-row>
          </b-form-group>
          <b-form-group>
            <b-form-row>
              <span class="label">Wicket Keeper</span>
              <div class="options">
                <b-form-radio-group v-model="player.wicketKeeper">
                  <b-form-radio value=true>Yes</b-form-radio>
                  <b-form-radio value=false>No</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-form-row>
          </b-form-group>
          <b-form-group>
            <b-form-row>
              <span class="label">All Rounder</span>
              <div class="options">
                <b-form-radio-group v-model="player.allRounder">
                  <b-form-radio value=true>Yes</b-form-radio>
                  <b-form-radio value=false>No</b-form-radio>
                </b-form-radio-group>
              </div>
            </b-form-row>
          </b-form-group>
        </div>
      </b-form-group>
      <b-button class="mx-auto d-block" @click="submit">Submit</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data() {
    return {
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
        collegeId: null,
        department: null,
        year: null,
        contact: null,
        batsman: null,
        bowlerHand: null,
        bowlerType: null,
        wicketKeeper: false,
        allRounder: false
      }
    }
  },
  methods: {
    submit() {
      console.log(this.player)
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