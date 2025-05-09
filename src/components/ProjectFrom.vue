<template>
        <form @submit.prevent = "onSubmit" class="p-3 border rounded" >
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input type="text" v-model="form.name" class="form-control">
                <div v-if="!$v.form.name.required" class="text-danger">El nombre es requerido</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Estado</label>
                <select class="form-select" v-model="form.status">
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <button class="btn btn-primary">Guardar</button>
        </form>
</template>


<script setup>

import {ref} from 'vue'
import useVuelidate from '@vuelidate/core';
import { projectStore } from '../store/project';
import { required } from '@vuelidate/validators';

//const projectStore = projectStore()

const form = ref({name: '', status:'activo'})

const rules = {form: {name:{required}}}
const $v = useVuelidate(rules, {form})


const onSubmit = async ()=>{

    $v.value.$touch()
    if($v.value.$invalid) {return}
    await projectStore.addProject(form.value)
    form.value.name = ''
}

    
</script>