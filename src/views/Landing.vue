<template>
  <transition name="slide-up">
    <div id="landing">
      <div class="welcome-text">
        <div class="line">Welcome To</div>
        <div class="line">BVM Premier League</div>
        <div class="line">Auction</div>
        <div class="line">Developed By</div>
        <div class="line">Team Developer (BVM)</div>
      </div>
      <button class="pullUp" @click="$router.push('/home')">V</button>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'LandingView'
}
</script>

<style lang="sass" scoped>
@import '../sass/landing'

</style>