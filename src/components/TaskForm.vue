<template>

    <form action="" @submit.prevent = "onSubmit" class="p-3" border rounded mt-4>
        <div class="mb-3">
            <label class= "form-label"> Titulo</label>
            <input type="text" v-model="form.title" class="form-control">
            <div v-if="!$v.form.title.required" class="text-danger">El titulo es requerido</div>
        </div>

        <div class="mb-3">
            <label class="form-label">Estado</label>
            <select name="" id="" v-model="form.status" class="form-select">
                <option value="pendiente">Pediente</option>
                <option value="enProgreso">En progreso</option>
                <option value="hecho">Hecho</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Prioridad</label>
            <select name="" id="" v-model="form.priority" class="form-select">
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
            </select>

        </div>
        <button class="btn btn-success">Guardar tarea</button>
    </form>



</template>



<script setup>
import { useRoute } from 'vue-router';
import { taskStore } from '../store/task';
import { ref } from 'vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

    const taskStore = taskStore()
    const route = useRoute()
    const form = ref({
        title: '',
        status: 'pendiente',
        priority: 'media',
        projectId: route.params.projectId
    })

    const rules = {form: {title: {required}}}
    const $v = useVuelidate(rules, {form})

    const onSubmit = async () => {
        $v.value.$touch()
        if($v.value.$invalid) {return}
        await taskStore.addTask(form.value)
        form.value.title = ''
    }


</script>