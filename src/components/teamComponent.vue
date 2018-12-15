<template>
  <div id="team">
    team Component
    <button class="close" @click="$emit('closeTeam')">X</button>
  </div>
</template>

<script>

export default {
  name: 'teamComponent',
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
  background: rgba(255, 255, 255, 0.8)
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

</style>