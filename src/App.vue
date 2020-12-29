<template>
<nav class="justify-between flex px-10 bg-purple-400 min-w-full shadow-md">
  <router-link to="/">
    <div class="py-4 text-2xl">Twotter</div>
  </router-link>
  <div>{{ state.user.username }} </div>
</nav>
<div id="app" class="bg-gray-200  overflow-x-scroll min-h-screen">
  <nav class="min-h-20 bg-white"></nav>
  <router-view/>
</div>
<to-do/>
</template>

<script>
import ToDo from './components/to-do.vue'

export default {
  name: 'App',
  components: { ToDo },
  setup() {
    const state = {
      user: {
        username: 'mac'
      }
    }
    return {
      state
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  text-align: center;
}
</style>
