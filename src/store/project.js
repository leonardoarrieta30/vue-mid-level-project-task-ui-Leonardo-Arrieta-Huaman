import { defineStore } from "pinia"
import axios from "axios"

export const projectStore = defineStore('project',{
    state: ()=>({
        projects: [],
        loading: false,
        error: null
    }),
    actions: {
        async getProjects(){
            this.loading = true
            try {
                const response = await axios.get('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects')
                this.projects = response.data
            } catch (error) {
                this.error = 'Error en la carga de proyectos'
            } finally{
                this.loading = false
            }
        },
        async addProject (data){
            await axios.post('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects', data)
            await this.getProjects()
        }
    }
})