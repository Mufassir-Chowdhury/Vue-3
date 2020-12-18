<template>
<div class="flex">
<div class="w-1/3">
<div class="bg-white mt-8 ml-8 px-3 py-3 rounded-sm">
  <div class="text-xl text-bold">
  @{{ user.userName }} - {{ fullName }}
  </div>
  <div class="inline-block bg-purple-700 text-bold text-white rounded-lg mt-1 px-1" v-if="user.isAdmin">Admin</div>
  <div class="mt-1">Followers: <span class="text-gray-400">{{ followers }}</span></div>
  <div class="inline-block text-white bg-indigo-400 mt-1 px-4 py-3 rounded-lg shadow-lg uppercase text-base tracking-wider hover:bg-indigo-300 focus:ring-2 active:bg-indigo-600 cursor-pointer select-none" @click="followUser">Follow</div>
</div>
</div>
<div class="w-2/3 mx-6 mt-8">
    <twotterItem v-for="twoot in user.twoots" :key="twoot.id" :userName="user.userName" :twoot="twoot" @favourite="toogleFavourite" />
</div>
</div>
</template>

<script>
import twotterItem from './twotterItem.vue';
export default {
    name: "userProfile",
    components: { twotterItem },
    data(){
    return {
     
        followers: 0,
      user: {
        id: 1,
        userName: 'MAC',
        firstName: 'Mufassir',
        lastName: 'Chowdhury',
        email: 'mac22214u@gmail.com',
        isAdmin: true,
        twoots: [
            { id: 1, content: "Twotter is Amazing!"},
            { id: 2, content: "Don't forget to follow!"},
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount){
      if(oldFollowerCount < newFollowerCount){
        console.log(`${this.fullName} has gained a follower`);
        alert('You got a new follower!');
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser(){
      this.followers++;
    },
    toogleFavourite(id){
      console.log(`Favourited twoot #${id}`)
    }
  },
  mounted() {
    this.followUser();
  },
}
</script>

<style lang="postcss">

</style>