<template>
  <div id="home">
    <cardComponent></cardComponent>
  </div>
</template>

<script>
import cardComponent from '../components/cardComponent'
export default {
  name: 'Home',
  components: {
    cardComponent
  },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<style lang="sass" scoped>
#home
  position: absolute
  width: 100%
  min-height: 100%
  background: -webkit-linear-gradient(-45deg, #e2b963, #6819ad)
</style>