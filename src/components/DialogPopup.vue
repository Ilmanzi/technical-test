<template>
    <!-- Use the <transition> tag to apply a transition effect -->
    <transition name="fade">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <!-- Modal content here -->
          <h2>Modal Title</h2>
          <p>This is the modal content.</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const showModal = ref(false);
  const emit = defineEmits(['closeModal']);
  
  const closeModal = () => {
    showModal.value = false;
    emit('closeModal'); // Emit the custom event to close the modal
  };
  
  // Listen for the custom 'openModal' event
  const openModal = () => {
    showModal.value = true;
  };
  </script>
  
  <style scoped>
  /* Define styles for the modal and transition animation as before */
  </style>
  