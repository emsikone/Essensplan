<template>
  <!-- nur Anzeigen wenn eingeloggt -->

  <div v-if="isLoggedIn" class="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100">
    <TopBarNavigation />
    <!-- Main Content -->
    <div class="container mx-auto px-4 py-24">
      <router-view />
    </div>
  </div>

  <!-- 🚫 Login-Formular -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100">
    <router-view />
  </div>

</template>

<script setup>
import { computed } from 'vue';
import  TopBarNavigation from '../components/TopBarNavigation.vue';
import { useUserStore } from '../stores/userStore';


const userStore = useUserStore();

let isLoggedIn = computed(() => {
//  return useUserStore().isLoggedIn;

  console.log('useUserStore()', userStore.isLoggedIn);
  console.log('isLoggedIn', localStorage);
  return true;
  // return localStorage.getItem('isLoggedIn') === 'true';
});



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

body {
  font-family: 'Quicksand', sans-serif;
}
</style>

