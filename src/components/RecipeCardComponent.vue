<template>
  <div
    class="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
    <img :src="getImageURL(recipe)" :alt="recipe.name" class="w-full h-48 object-cover">

    <div class="p-4">
      <h3 class="text-xl font-semibold text-indigo-600 mb-2">{{ recipe.name }}</h3>
      <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
      <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }"
        class="px-4 py-2 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full font-semibold hover:from-pink-500 hover:to-red-500 transition-all duration-300 ease-in-out">
        Details
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: Object
});

const PB_BASE_URL = "http://192.168.1.25:8080";

const getImageURL = (recipe) => {
  return recipe.image
    ? `${PB_BASE_URL}/api/files/recipes/${recipe.id}/${recipe.image}`
    : "https://placehold.co/400"; // Fallback-Bild
};
</script>