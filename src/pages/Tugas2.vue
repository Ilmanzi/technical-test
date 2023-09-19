<script setup>
import city from '../assets/js/city'
import province from '../assets/js/province'

import { ref } from 'vue';

const provinceId = ref();
const cityId = ref()

const cities = city
const provincies = province

const filteredCities = ref([]);
const filteredProvincies = ref({});
const filteredId = ref({})
const filteredShow = ref({})

const filterCities = () => {
    filteredCities.value = cities.filter(city => city.provinsi_id === Number(provinceId.value));
    filteredProvincies.value = provincies.filter(province => province.id === Number(provinceId.value))
};

const filterCityId = () => {
    filteredId.value = cities.filter(city => city.id === Number(cityId.value))
}

const filterCityProv = () => {
    let newId = filteredId.value[0]?.provinsi_id
    filteredShow.value = provincies.filter(province => province.id === Number(newId))
}
</script>

<template>
    <div class="pl-[300px] pt-[80px]">
        <div>
            <div class="flex">
                <label class="flex-1 text-xl p-5 text-center">Masukan ID Province</label><br>
                <label class="flex-1 text-xl p-5 text-center">Masukan ID City</label><br>
            </div>
            <div class="flex">
                <input type=text class="flex-1 bg-white text-center p-5 mx-32" v-model="provinceId"
                    placeholder="Enter Province ID 1 - 34" @input="filterCities" />
                <input type=text class="flex-1 bg-white text-center p-5 mx-24" v-model="cityId" placeholder="Enter City ID 1 - 363"
                    @input="filterCityId(); filterCityProv()" />
            </div>
            <div class="flex">
                <p class="p-3 flex-1 text-center text-xl">{{ filteredProvincies[0]?.name }}</p>
                <div class="flex-1">
                    <p class="pt-3 text-center text-xl">{{ filteredId[0]?.name }}</p>
                    <p class="text-center text-3xl">{{ filteredShow[0]?.name }}</p>

                </div>
            </div>
            <ul>
                <li v-for="city in filteredCities" :key="city.id">{{ city.name }} - {{ city.id }}</li>
            </ul>
        </div>
    </div>
</template>

<style>
input[type=text]:focus{
  outline: 2px solid blue;     /* oranges! yey */
}
</style>