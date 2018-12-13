<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Raleway')
@import url('https://fonts.googleapis.com/css?family=Bungee')

body
  padding: 0
  margin: 0

::-webkit-scrollbar
  display: none

#app
  font-family: 'Raleway', sans-serif

.heading
  font-size: 44px
  font-family: 'Bungee', sans-serif
  color: white
  text-transform: uppercase
  text-align: center

</style>
