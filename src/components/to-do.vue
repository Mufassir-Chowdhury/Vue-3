<template>
<div>
    <h1>Vue 3 ToDo App </h1>
    <form @submit.prevent="addNewTodo">
        <label>New ToDo</label>
        <input v-model="newToDo" name="newTodo">
        <button>Add new Todo</button>
    </form>
    <button @click="removeAllTodos">Remove All</button>
    <button @click="markAllDone">Mark All Done</button>
    <ul>
        <li v-for="(todo, index) in toDos" :key="todo.id">
            <span class="cursor-pointer select-none" :class="{ 'line-through': todo.done }" @click="toggleDone(todo)">{{ todo.content }}</span>
            <button @click="removeTodo(index)">Remove</button>
        </li>
    </ul>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "to-do",   
  
    setup() {
        const newToDo = ref('');
        const toDos = ref([]);

        function addNewTodo(){
            toDos.value.push({
                id: Date.now(),
                done: false,
                content: newToDo.value,
            });
            newToDo.value = '';
        }

        function toggleDone(todo){
            todo.done = !todo.done;
        }

        function removeTodo(index){
            toDos.value.splice(index, 1);
        }

        function markAllDone(){
            toDos.value.forEach((todo) => todo.done = true);
        }

        function removeAllTodos(){
            toDos.value = []
        }

        return {
            addNewTodo,
            newToDo,
            toDos,
            toggleDone,
            removeTodo,
            markAllDone,
            removeAllTodos
        }
    } 
}
</script>

<style lang="postcss">

</style>