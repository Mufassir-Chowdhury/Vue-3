<template>
<div class="relative max-w-full h-16 flex nav shadow-lg">
<span class="text-4xl text-center my-auto mx-6">Twotter</span>
<span class="absolute user">@MAC</span>
</div>
<div id="app"  class="overflow-x-scroll">
  <user-profile/>
</div>
</template>

<script>
import userProfile from './components/userProfile.vue';

export default {
  components: { userProfile },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}
.user {
  right:5%;
  top:25%;
  text-align: center;
}
.nav {
  background-color: #F3F5FA;
}
</style>
