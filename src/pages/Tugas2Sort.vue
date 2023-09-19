<script setup>
import provincies from '../assets/js/province'
import { ref } from 'vue';

const sortedProvincies = ref(provincies);

const sortByIdAscending = () => {
    sortedProvincies.value = [...provincies].sort((a, b) => a.id - b.id);
};

const sortByIdDescending = () => {
    sortedProvincies.value = [...provincies].sort((a, b) => b.id - a.id);
};

const sortByNameAscending = () => {
    sortedProvincies.value = [...provincies].sort((a, b) => a.name.localeCompare(b.name));
};

const sortByNameDescending = () => {
    sortedProvincies.value = [...provincies].sort((a, b) => b.name.localeCompare(a.name));
};

</script>

<template>
    <div class="pl-[300px] pt-[80px]">
        <p class="p-5">Provincies List</p>
        <div class="grid grid-cols-4 gap-2">
            <button class="bg-slate-300 rounded-xl" @click="sortByIdAscending">Sort by ID (Asc)</button>
            <button class="bg-slate-300 rounded-xl" @click="sortByIdDescending">Sort by ID (Desc)</button>
            <button class="bg-orange-300 rounded-xl" @click="sortByNameAscending">Sort by Name (Asc)</button>
            <button class="bg-orange-300 rounded-xl" @click="sortByNameDescending">Sort by Name (Desc)</button>
        </div>
        <ul class="pt-5">
            <li v-for="province in sortedProvincies" :key="province.id">{{ province.id }} - {{ province.name }}</li>
        </ul>
    </div>
</template>

<style></style>