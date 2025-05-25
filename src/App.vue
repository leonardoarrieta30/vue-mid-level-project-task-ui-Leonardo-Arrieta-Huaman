<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a class="navbar-brand" href="#" >Gestion de proyectos</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/projects">Proyectos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/tasks">Tareas</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <main class="container py-4">
    <RouterView/>
  </main>
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>