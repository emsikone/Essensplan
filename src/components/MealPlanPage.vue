<template>
    <div>
      <h2 class="text-3xl font-bold text-indigo-600 mb-6">Wochenplan</h2>
      
      <div class="grid grid-cols-7 gap-4 mb-8">
        <div v-for="day in weekDays" :key="day" class="bg-white rounded-xl shadow-md p-4">
          <h3 class="font-semibold text-indigo-600 mb-2">{{ day }}</h3>
          <div v-for="meal in meals" :key="meal" class="mb-2">
            <p class="text-sm font-medium text-gray-600">{{ meal }}:</p>
            <div class="bg-gray-100 rounded-lg p-2 h-16 flex items-center justify-center text-gray-500 text-sm">
              Mahlzeit hierher ziehen
            </div>
          </div>
        </div>
      </div>
      
      <button class="w-full py-4 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full font-semibold text-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
        Wochenplan generieren
      </button>
    </div>
  </template>
  
  <script setup>
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const meals = ['Frühstück', 'Mittagessen', 'Abendessen'];
  </script>