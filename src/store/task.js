import { defineStore } from "pinia"
import axios from "axios"


export const taskStore = defineStore('task', {
    state: ()=>({
        tasks : [],
        loading: false,
        error:  null
    }),
    actions:{
        async getTasks(projectId){
            this.loading = true
            try {
                const response = await axios.get('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/tasks')
                this.tasks = response.data
            } catch (error) {
                this.error = 'Error en la carga de tareas'
            } finally{
                this.loading = false
            }
        },
        async addTask (data){
            await axios.post('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/tasks', data)
            await this.getTasks(data.projectId)
        }
    }


})