<template>

  <div>
    <h2 class="text-3xl font-bold text-indigo-600 mb-6">Meine Rezepte</h2>

    <div v-if="isLoading">Lädt...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- 🟢 RecipeCardComponent mit v-for -->
      <RecipeCardComponent v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      <!-- 🟢 RecipeCardComponent mit v-for -->
    </div>

    <!-- 🟢 Button zum Erstellen eines neuen Rezepts -->
    <button @click="$router.push({ name: 'create-recipe' })"
      class="mt-8 px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold text-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105">
      + Neues Rezept
    </button>
  </div>
</template>

<script setup>
// Importe aus Vue
import { ref, onMounted } from 'vue';

// Importiere RecipeService
import { recipeService } from '@/services/RecipeService';

// Importie RecipeCardComponent  
import RecipeCardComponent from '@/components/RecipeCardComponent.vue';



// Rezeptliste als reaktive Variable
const recipes = ref([]);
const isLoading = ref(true);
const errorMessage = ref(null);

// Lade alle Rezepte beim Start der Komponente
onMounted(async ()=> {
  try {
    recipes.value = await recipeService.getAllRecipes();
    isLoading.value = false;
  } catch (error) {
    errorMessage.value = error.message;
  }
}

);
</script>