<template>
<div class="container mt-4">
    <h2>Proyectos</h2>
    <ProjectFrom/>

    <div v-if="store.loading">Cargando ....</div>
    <table v-if="!store.loading" class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Estado</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="project in store.projects" :key="project.id">
                <td>{{ project.name }}</td>
                <td>{{ project.status}}</td>
            </tr>
        </tbody>
        
    </table>
    

</div>
</template>


<script setup>
import { onMounted } from 'vue';
import ProjectFrom from '../components/ProjectFrom.vue';
import { projectStore } from '../store/project';


const store = projectStore()
onMounted(()=>store.getProjects())

</script>