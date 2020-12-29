<template>
<div class="flex text-left">
  <div class="w-1/3 mx-10 my-10 ">
    <div>
      <div class="bg-white shadow-md border px-4 py-4 rounded-lg">
          <div class="text-xl">
              @{{ state.user.userName}}
          </div>
          <button class="inline-block px-2 py-1 bg-purple-500 text-sm rounded-md text-white my-1 uppercase tracking-wider" v-if="state.user.isAdmin">Admin</button>
          <button class="inline-block px-2 py-1 bg-purple-500 text-sm rounded-md text-white my-1 uppercase tracking-wider" v-else>user</button>    
          <div class="text-sm">  
              <strong>Followers: {{ state.followers }}</strong>
          </div>
      </div>
    </div>
    <NewTwoot @add-twoot="addTwoot"/>
  </div>
  <div class="w-2/3 mx-4 my-10">
      <timeline v-for="twoot in state.user.twoots" :key="twoot.id"  :userName="state.user.userName" :twoot="twoot"/>
  </div>
</div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users';
import NewTwoot from '../components/NewTwoot.vue';
import timeline from '../components/timeline.vue';
export default {
  name: 'userProfile',
  components: { timeline, NewTwoot },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);


    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    })

    function addTwoot(twoot){
        state.user.twoots.unshift({
        id: state.user.twoots.length +1, content: twoot
      });
    }

    return {
      state,
      addTwoot,
      userId
    }
  }
}
</script>

<style lang="postcss">

</style>