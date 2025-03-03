<template>
    <div>
      <h2 class="text-3xl font-bold text-indigo-600 mb-6">Einkaufsliste</h2>
      
      <div class="bg-white rounded-2xl shadow-md p-6">
        <div v-for="category in shoppingList" :key="category.name" class="mb-6">
          <h3 class="text-xl font-semibold text-indigo-600 mb-3">{{ category.name }}</h3>
          <ul class="space-y-2">
            <li v-for="item in category.items" :key="item.name" class="flex items-center">
              <input type="checkbox" :id="item.name" class="form-checkbox h-5 w-5 text-pink-500 rounded-full">
              <label :for="item.name" class="ml-2 text-gray-700">{{ item.name }} - {{ item.amount }}</label>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8 flex space-x-4">
        <button class="flex-1 py-3 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full font-semibold text-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 ease-in-out">
          Als PDF exportieren
        </button>
        <button class="flex-1 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full font-semibold text-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 ease-in-out">
          Druckansicht
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const shoppingList = [
    {
      name: 'Gemüse',
      items: [
        { name: 'Tomaten', amount: '500g' },
        { name: 'Gurke', amount: '2 Stück' },
        { name: 'Paprika', amount: '3 Stück' },
      ]
    },
    {
      name: 'Milchprodukte',
      items: [
        { name: 'Milch', amount: '1L' },
        { name: 'Joghurt', amount: '500g' },
        { name: 'Käse', amount: '200g' },
      ]
    },
    {
      name: 'Getreideprodukte',
      items: [
        { name: 'Vollkornbrot', amount: '1 Stück' },
        { name: 'Nudeln', amount: '500g' },
        { name: 'Reis', amount: '1kg' },
      ]
    }
  ];
  </script>