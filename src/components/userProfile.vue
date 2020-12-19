<template>
<div class="flex divide-x divide-gray-300">
  <div class="w-1/3">
    <div>
      <div class="bg-white mt-8 ml-8 px-3 py-3 rounded-sm">
        <div class="text-xl text-bold">
        @{{ user.userName }} - {{ fullName }}
        </div>
        <div class="inline-block bg-purple-700 text-bold text-white rounded-sm mt-1 px-1" v-if="user.isAdmin">Admin</div>
        <div class="mt-1">Followers: <span class="text-gray-400">{{ followers }}</span></div>
        <div class="inline-block text-white bg-indigo-400 mt-1 px-2 py-1 rounded-md shadow-lg uppercase text-base tracking-tight hover:bg-indigo-300 focus:ring-2 active:bg-indigo-600 cursor-pointer select-none" @click="followUser">Follow</div>
      </div>
    </div>
    <div>
      <div class="bg-white overflow-hidden mt-8 ml-8 px-3 py-3 rounded-sm">
        <form @submit.prevent="createNewTwoot" >
          <div><label>New Twoot</label> {{180 - newTwootCharacterContent }}</div>
          <textarea class="border-gray-200 border-2" placeholder="tut tut tut" v-model="newTwootContent" wrap="hard"/>
          <div>
            <label>Twoot type: </label>
            <select v-model="selectedTwootType">
              <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                {{ option.name }}
              </option>
            </select>
            <div>
            <button class="inline-block text-white bg-indigo-400 mt-1 px-2 py-1 rounded-md shadow-lg uppercase text-base tracking-tight hover:bg-indigo-300 focus:ring-2 active:bg-indigo-600 cursor-pointer select-none" :class="{'red': newTwootCharacterContent > 180}">Twoot!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="w-2/3 ml-4 pl-4 mt-8 mr-2">
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
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant Twoot'} 
      ],
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
    },
    newTwootCharacterContent () {
      return this.newTwootContent.length;
    }
  },
  methods: {
    followUser(){
      this.followers++;
    },
    toogleFavourite(id){
      console.log(`Favourited twoot #${id}`)
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft'){
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent,
        }),
        this.newTwootContent= ''
      }
    }
  },
  mounted() {
    this.followUser();
  },
}
</script>

<style lang="postcss">
.red {
  @apply bg-red-800;
}
</style>