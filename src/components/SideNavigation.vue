<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="fixed top-0 left-0 w-[281px] h-screen bg-[#FFFFFF] shadow">
        <div class="py-[32px] pl-[36px] text-left">
            <p class="text-[35px] text-[#152544] inter-font font-bold">heylink.</p>
        </div>
        <div>
            <ul class="text-left pl-[41px]">
                <!-- Dashboard route -->
                <li>
                    <router-link to="/" class="flex py-3 hover:bg-blue-100 border-0 text-center pl-2 w-[230px]">
                        <Icon icon="solar:graph-down-linear" width="23" class="pr-1" />
                        Dashboard
                    </router-link>
                </li>
                <!-- Overview route -->
                <li><router-link to="/overview" class="flex py-3 hover:bg-blue-100 border-0 text-center pl-2 w-[230px]">
                        <Icon icon="solar:graph-up-outline" width="23" class="pr-1" />
                        Overview
                    </router-link>
                </li>
                <!-- Tugas2 -->
                <li><router-link to="/tugas2" class="flex py-3 hover:bg-blue-100 border-0 text-center pl-2 w-[230px]">
                        <Icon icon="ic:baseline-work" width="23" class="pr-1" />
                        Tugas 2
                    </router-link>
                </li>
                <!-- Tugas2Sort -->
                <li><router-link to="/tugas2sort" class="flex py-3 hover:bg-blue-100 border-0 text-center pl-2 w-[230px]">
                        <Icon icon="ic:baseline-work" width="23" class="pr-1" />
                        Tugas 2 Sort
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.inter-font {
    font-family: Inter;
}
</style>