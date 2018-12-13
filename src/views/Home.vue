<template>
  <div id="home">
    <vue-glide :perView=1 type="carousel">
      <vue-glide-slide>
        <card-component></card-component>
      </vue-glide-slide>
      <vue-glide-slide>
        <card-component></card-component>
      </vue-glide-slide>
      <vue-glide-slide>
        <card-component></card-component>
      </vue-glide-slide>
    </vue-glide>

  </div>
</template>

<script>
import cardComponent from '../components/cardComponent'
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'Home',
  components: {
    cardComponent,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
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
  background: -webkit-linear-gradient(-45deg, #e2b963, #6819ad)
</style>