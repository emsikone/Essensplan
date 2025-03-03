<template>
    <div>
      <h2 class="text-3xl font-bold text-indigo-600 mb-6">Willkommen zurück!</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl shadow-md p-6">
          <h3 class="text-2xl font-semibold text-indigo-600 mb-4">Aktueller Wochenplan</h3>
          <div class="space-y-2">
            <div v-for="day in currentWeek" :key="day.name" class="flex justify-between items-center">
              <span class="font-medium">{{ day.name }}:</span>
              <span>{{ day.meal }}</span>
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <button @click="redirectToCreateRecipe" class="w-full py-4 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full font-semibold text-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            Neues Rezept erstellen
          </button>
          <button @click="redirectToShoppingList" class="w-full py-4 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full font-semibold text-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
            Einkaufsliste anzeigen
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  import { useRouter } from 'vue-router';

  const router = useRouter(); 

  console.log(router);

  const currentWeek = [
    { name: 'Montag', meal: 'Pasta Primavera' },
    { name: 'Dienstag', meal: 'Bunter Salat' },
    { name: 'Mittwoch', meal: 'Gemüse-Curry' },
    { name: 'Donnerstag', meal: 'Ofenkartoffeln' },
    { name: 'Freitag', meal: 'Pizza' },
    { name: 'Samstag', meal: 'Grill-Abend' },
    { name: 'Sonntag', meal: 'Brunch' },
  ];

  const redirectToCreateRecipe = () => {
    router.push('/create-edit-recipe');
  };

  const redirectToShoppingList = () => {
    router.push('/shopping-list');
  };

  </script>