<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="grid grid-cols-3 pl-[330px] pt-[95px] z-0">

        <!-- Table 1 -->
        <div class="bg-[#FFFFFF] h-[143px] w-[320px] rounded-xl border-2 flex-col relative">
            <div class="flex px-5 pt-5">
                <h1 class="text-[#727272] flex-1 text-left text-[12px]">Pending</h1>
                <Icon icon="tdesign:swap" color="#727272" width="20" class="bg-gray-300 p-1" />
            </div>
            <div class="flex pl-5 font-bold text-[20px]">
                <p>2.480</p>
                <p class="text-[#727272]">,30</p>
            </div>
            <div class="flex bg-[#F9FAFC] h-[47px] align-middle place-items-center absolute bottom-0 rounded-xl w-[316px]">
                <div class="flex text-[10px] text-[#4CBF93] pl-5">
                    <Icon icon="jam:arrow-up-right" color="#4cbf93" width="15" class="pr-1" />2,15%
                </div>
                <p class="flex text-[10px] text-[#6E6E6E] pl-2">Last Month</p>
                <p class="flex-1 text-[10px] text-[#6E6E6E] text-end font-bold pr-5">View More</p>
            </div>
        </div>

        <!-- Table 2 -->
        <div class="bg-[#FFFFFF] h-[143px] w-[320px] rounded-xl border-2 flex-col relative">
            <div class="flex px-5 pt-5">
                <h1 class="text-[#727272] flex-1 text-left text-[12px]">Paid</h1>
                <Icon icon="tdesign:swap" color="#727272" width="20" class="bg-gray-300 p-1" />
            </div>
            <div class="flex pl-5 font-bold text-[20px]">
                <p>84.310</p>
            </div>
            <div class="flex bg-[#F9FAFC] h-[47px] align-middle place-items-center absolute bottom-0 rounded-xl w-[316px]">
                <div class="flex text-[10px] text-[#EE7C85] pl-5">
                    <Icon icon="jam:arrow-down-right" color="#EE7C85" width="15" class="pr-1" />1.10%
                </div>
                <p class="flex text-[10px] text-[#6E6E6E] pl-2">Last Month</p>
                <p class="flex-1 text-[10px] text-[#6E6E6E] text-end font-bold pr-5">View More</p>
            </div>
        </div>

        <!-- Table 3 -->
        <div class="bg-[#FFFFFF] h-[143px] w-[320px] rounded-xl border-2 flex-col relative">
            <div class="flex px-5 pt-5">
                <h1 class="text-[#727272] flex-1 text-left text-[12px]">Rejected</h1>
                <Icon icon="tdesign:swap" color="#727272" width="20" class="bg-gray-300 p-1" />
            </div>
            <div class="flex pl-5 font-bold text-[20px]">
                <p>12.155</p>
            </div>
            <div class="flex bg-[#F9FAFC] h-[47px] align-middle place-items-center rounded-xl w-[316px] absolute bottom-0">
                <div class="flex text-[10px] text-[#4CBF93] pl-5">
                    <Icon icon="jam:arrow-up-right" color="#4cbf93" width="15" class="pr-1" />2,15%
                </div>
                <p class="flex text-[10px] text-[#6E6E6E] pl-2">Last Month</p>
                <p class="flex-1 text-[10px] text-[#6E6E6E] text-end font-bold pr-5">View More</p>
            </div>
        </div>
    </div>
</template>

<style></style>