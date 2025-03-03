<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100">

    <!-- 🚀 Sticky Navbar -->
    <nav class="fixed top-0 left-0 w-full border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 z-50">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <!-- Logo -->
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/logo.png" class="h-8" alt="Essensplaner Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yummi-Planer</span>
        </a>

        <!-- 🍔 Hamburger Button -->
        <button @click="toggleMenu" type="button"
          class="fixed top-4 right-4 z-50 p-2 w-10 h-10 text-gray-500 rounded-lg bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <!-- 📌 Dropdown Navigation (Overlay) -->
        <div 
          :class="isMenuOpen ? 'fixed inset-0 bg-gray-50 dark:bg-gray-800 z-40 flex flex-col items-center justify-center backdrop-blur-lg' : 'hidden'"
          id="navbar-hamburger">
          <ul class="w-3/4 text-center font-medium space-y-4">
            <li v-for="tab in tabs" :key="tab.id">
              <RouterLink :to="{ name: tab.id }"
                class="block py-3 px-4 rounded-sm text-xl font-semibold"
                :class="activeTab === tab.id 
                  ? 'text-white bg-blue-700 dark:bg-blue-600' 
                  : 'text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'"
                @click="activeTab = tab.id; isMenuOpen = false">
                {{ tab.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-24"> 
      <main class="bg-white bg-opacity-75 rounded-3xl shadow-lg p-8 backdrop-blur-sm">
        <router-view />
      </main>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const activeTab = ref('home');

const tabs = [
  { id: 'home', name: 'Startseite' },
  { id: 'recipes', name: 'Rezepte' },
  { id: 'meal-plan', name: 'Wochenplan' },
  { id: 'shopping-list', name: 'Einkaufsliste' },
  { id: 'ingredients-manager', name: 'Zutaten bearbeiten' },
  { id: 'create-edit-recipe', name: 'Rezept erstellen/bearbeiten' }
];
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

body {
  font-family: 'Quicksand', sans-serif;
}
</style>

<style scoped>
.router-link-active {
  transform: translateY(-2px);
}
.router-link-active:hover {
  transform: translateY(-1px);
}
</style>
