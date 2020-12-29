<template>
  <div class="home">
      <h1>Home</h1>
      <div>
        <router-link class="block" v-for="user in users" :to="{ name: 'userProfile', params: {userId: user.id}}" :key="user.id">
          {{ user.userName }}
        </router-link>
      </div>
  </div>
</template>

<script>
import { users } from '../assets/users';
export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>
