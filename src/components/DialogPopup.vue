<template>
    <transition name="fade">
        <div v-if="showModal" class="modal z-10">
            <div class="modal-content">
                <div class="flex">
                    <img :src="userDetails.profile_picture" width="150" height="150" style="border-radius: 50%;">
                    <div class="flex-1 px-5">
                        <p class="text-[40px]">{{ userDetails.first_name }} {{ userDetails.last_name }}</p>
                        <p class="text-[20px]">{{ userDetails.email }}</p>
                        <p class="text-[20px]">{{ userDetails.phone }}</p>
                    </div>
                    <div>
                        <button @click="closeModal">
                            <Icon icon="icon-park-solid:big-x" color="#fa1212" />
                        </button>
                    </div>
                </div>
                <div class="flex text-left p-5">
                    <div class="flex-1">
                    <h3>Gender: {{ userDetails.gender }}</h3>
                    <h3>Date of birth: {{ LongDate(userDetails.date_of_birth) }}</h3>
                    <h3>job: {{ userDetails.job }}</h3>
                </div>
                <div class="flex-1">

                    <p>street: {{ userDetails.street }}</p>
                    <p>city: {{ userDetails.city }}</p>
                    <p>state: {{ userDetails.state }}</p>
                    <p>country: {{ userDetails.country }}</p>
                    <p>zipcode: {{ userDetails.zipcode }}</p>
                    <p>latitude: {{ userDetails.latitude }}</p>
                    <p>longitude: {{ userDetails.longitude }}</p>
                </div>
                </div>
                
            </div>
        </div>
    </transition>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

function LongDate(tanggal) {
    var today = new Date(tanggal)
    var joinDate = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`

    return joinDate
}

const { showModal, userDetails } = defineProps(['showModal', 'userDetails']);
const emit = defineEmits(['closeModal']);

const closeModal = () => {
    emit('closeModal');
};
</script>
  
<style scoped>
/* Define styles for the modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Define the transition animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>
  