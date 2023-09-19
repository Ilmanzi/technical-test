<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import DialogPopup from './DialogPopup.vue'

const users = ref({});

const fetchUsers = async () => {
    try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
        users.value = response.data.users;
        console.log(users)
    } catch (error) {
        console.error("Error fetcthing users:", error)
    }
};

onMounted(() => {
    fetchUsers()
})

function LongDate(tanggal) {
    var today = new Date(tanggal)
    console.log(today)
    var joinDate = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`

    return joinDate
}
</script>

<template>
    <div class="ml-[330px] pl-5 mb-10 mt-5 mr-16 bg-[#FFFFFF] rounded-xl border-2 shadow">
        <div class="flex justify-start place-content-center h-[69px] items-center font-bold">
            User List
        </div>
        <div>
            <table class="text-xs text-left table w-full">
                <thead class="h-[49px]">
                    <tr class="text-[#7C7C7C] bg-[#FAFBFC]">
                        <th>ID</th>
                        <th>User</th>
                        <th>Date of birth</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" class="h-[49px]">
                        <td class="text-[#686868]">{{ user.id }}</td>
                        <td><div class="flex justify-start items-center"><img :src="user.profile_picture" alt="Profile Picture" class="pr-1" width="24" height="24" style="border-radius: 50%;">{{ user.first_name }} {{ user.last_name }}</div></td>
                        <td class="text-[#686868]">{{ LongDate(user.date_of_birth) }}</td>
                        <td>{{ user.email }}</td>
                        <td class="text-[#686868]">{{ user.job }}</td>
                        <td>{{ user.country }}</td>
                        <td><button class="shadow-sm border-2 rounded-lg px-5 py-2">View Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style></style>