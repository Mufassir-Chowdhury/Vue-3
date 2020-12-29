<template>
 <div class="bg-white mb-4 p-3 shadow-md rounded-lg  transform transition hover:scale-110 cursor-pointer select-none" @click="favourited(twoot.id)">
        <div class="text-lg"> @{{ userName }} </div>
        <div class="text-gray-700"> {{ twoot.content }} </div>
    </div>
</template>

<script>
export default {
    name: "timeline",
    props: {
        userName: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="postcss">

</style>