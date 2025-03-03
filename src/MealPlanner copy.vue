<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100">
    <div class="container mx-auto px-4 py-8">
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-indigo-600 mb-2">Yummy Planner</h1>
        <p class="text-xl text-gray-600">Dein freundlicher Essensplaner</p>
      </header>
/* 
      <nav class="mb-8 overflow-x-auto pb-4">
        <ul class="flex flex-col md:flex-row justify-start md:justify-center items-center gap-2 md:gap-4 min-w-max md:min-w-0 px-4">
          <li v-for="tab in tabs" :key="tab.id">
            <RouterLink 
              :to="{ name: tab.id }"
              class="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 ease-in-out shadow-md border-2 whitespace-nowrap"
              :class="activeTab === tab.id 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'"
              @click="activeTab = tab.id"
            >
              {{ tab.name }}
            </RouterLink>
          </li>
        </ul>
      </nav> */

      <nav class="mb-8 overflow-x-auto pb-4">
        <ul class="flex flex-row justify-start md:justify-center items-center gap-2 md:gap-4 min-w-max md:min-w-0 px-4">
          <li v-for="tab in tabs" :key="tab.id">
            <RouterLink 
              :to="{ name: tab.id }"
              class="inline-block px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 ease-in-out shadow-md border-2 whitespace-nowrap"
              :class="activeTab === tab.id 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'"
              @click="activeTab = tab.id"
            >
              {{ tab.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>


      <main class="bg-white bg-opacity-75 rounded-3xl shadow-lg p-8 backdrop-blur-sm">

        <router-view />
      </main>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  // import HomePage from './components/HomePage.vue';
  // import RecipesPage from './components/RecipesPage.vue';
  // import MealPlanPage from './components/MealPlanPage.vue';
  // import ShoppingListPage from './components/ShoppingListPage.vue';
  // import IngredientManager from './components/IngredientManager.vue';	
  // import CreateEditRecipe from './components/CreateEditRecipe.vue';

  
  const activeTab = ref('home');
  
  const tabs = [
    { id: 'home', name: 'Startseite' },
    { id: 'recipes', name: 'Rezepte' },
    { id: 'meal-plan', name: 'Wochenplan' },
    { id: 'shopping-list', name: 'Einkaufsliste' },
    { id: 'ingredients-manager', name: 'Zutaten bearbeiten' },
    { id: 'create-edit-recipe', name: 'Rezept erstellen/bearbeiten' }
  ];
  
  // const currentTabComponent = computed(() => {
  //   switch (activeTab.value) {
  //     case 'home':
  //       return HomePage;
  //     case 'recipes':
  //       return RecipesPage;
  //     case 'meal-plan':
  //       return MealPlanPage;
  //     case 'shopping-list':
  //       return ShoppingListPage;
  //     case 'ingredients-manager':
  //       return IngredientManager;
  //     case 'create-edit-recipe':
  //       return CreateEditRecipe;
  //     default:
  //       return HomePage;
  //   }
  // });
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