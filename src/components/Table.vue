<template>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index"></th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                <td v-for="(value, key, colIndex) in row" :key="colIndex">
                    {{ value }}
                </td>
            </tr>
        </tbody>

    </table>
</template>


<script setup>
   defineProps({
    headers: Array,
    data:Array
   })
</script>