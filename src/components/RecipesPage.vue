<template>
  <div>
    <h2 class="text-3xl font-bold text-indigo-600 mb-6">Meine Rezepte</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="recipe in recipes" :key="recipe.id"
        class="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img :src="recipe.image" :alt="recipe.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold text-indigo-600 mb-2">{{ recipe.name }}</h3>
          <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
          <!-- 🟢 Details-Button mit RouterLink -->
          <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }"
            class="px-4 py-2 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full font-semibold hover:from-pink-500 hover:to-red-500 transition-all duration-300 ease-in-out">
            Details
          </RouterLink>
        </div>
      </div>
    </div>

    <button
      class="mt-8 px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold text-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105">
      + Neues Rezept
    </button>
  </div>
</template>

<script setup>
const recipes = [
  { id: 1, name: 'Pasta Primavera', description: 'Leichte Sommerpasta mit frischem Gemüse', image: 'images/meal.jpg' },
  { id: 2, name: 'Bunter Salat', description: 'Knackiger Salat mit Quinoa und Avocado', image: 'images/meal.jpg' },
  { id: 3, name: 'Smoothie Bowl', description: 'Erfrischende Bowl mit Beeren und Granola', image: 'images/meal.jpg' },
  { id: 4, name: 'Gemüse-Curry', description: 'Würziges Curry mit Kokosmilch und Reis', image: 'images/meal.jpg' },
  { id: 5, name: 'Ofenkartoffeln', description: 'Knusprige Kartoffeln mit Dip-Variation', image: 'images/meal.jpg' },
  { id: 6, name: 'Mediterraner Wrap', description: 'Gefüllter Wrap mit Falafel und Hummus', image: 'images/meal.jpg' },
];

function getRecipesFromAPI() {
  // Hier würde die API-Abfrage stattfinden
}
</script>