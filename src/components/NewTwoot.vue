<template>
<div class="my-4 px-4 py-4 rounded-lg shadow-md bg-white">
    <form @submit.prevent="createNewTwoot">
    <label class="block">New Twoot <span :class="{'text-red-600': newTwootCharactercount > 180}">({{ newTwootCharactercount }}/180)</span></label>
    <textarea :class="{ 'border-red-600 border-2': newTwootCharactercount > 180, 'border-1': newTwootCharactercount <= 180}" class="placeholder-purple-500 px-2 py-2" placeholder="What's on your mind?" v-model="state.newTwootContent"></textarea>
    <label class="block">Type: </label>
    <select v-model="state.selectedTwootType">
        <option :value="option.value" v-for="(option, index) in state.TwootTypes" :key="index">
        {{ option.name }}
        </option>
    </select>
    <button class="block px-2 py-1 text-sm rounded-md text-white my-1 uppercase tracking-wider" :class="{'bg-gray-300': newTwootCharactercount > 180, 'bg-purple-500': newTwootCharactercount <= 180}">Twoot</button>
    </form>
</div>
</template>
<script>
import { reactive, computed } from 'vue';
export default {
  name: 'NewTwoot',
  setup(props, ctx) {
    const state = reactive({
      newTwootContent: '',
      selectedTwootType: 'instant',
      TwootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant' , name: 'instant Twoot' }
      ],
    })

    const newTwootCharactercount = computed(() => state.newTwootContent.length)

    function createNewTwoot(){
      if (state.newTwootContent && state.selectedTwootType !== 'draft' && newTwootCharactercount.value <= 180){
        let twoot = state.newTwootContent;
        ctx.emit('add-twoot', twoot);
        state.newTwootContent = '';
      } else if(newTwootCharactercount.value > 180){
        alert('Character limit exceeded!');
      }
    }

    return {
      state,
      newTwootCharactercount,
      createNewTwoot
    }
  },
}
</script>

<style lang="postcss">

</style>