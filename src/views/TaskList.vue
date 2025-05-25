<template>

<div class="container mt-4">
    <h2>Tareas del proyecto {{ route.params.projectId }}</h2>
    <TaskForm></TaskForm>
</div>


</template>


<script setup>
import { useRoute } from 'vue-router';
import { taskStore } from '../store/task';
import { onMounted } from 'vue';
import TaskForm from '../components/TaskForm.vue';

    const route = useRoute()
    const store = taskStore()
    onMounted(()=> store.getTasks(route.params.projectId))
</script>