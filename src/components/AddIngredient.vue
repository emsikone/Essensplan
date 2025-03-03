<template>
    <div class="bg-white rounded-3xl shadow-lg p-8">
      <h2 class="text-3xl font-bold text-indigo-600 mb-6">Neue Zutat hinzufügen</h2>
      
      <form @submit.prevent="addIngredient" class="space-y-6">
        <div>
          <label for="ingredientName" class="block text-sm font-medium text-gray-700 mb-1">Zutat Bezeichnung</label>
          <input
            type="text"
            id="ingredientName"
            v-model="newIngredient.name"
            class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Mögliche Mengeneinheiten</label>
          <div class="space-y-2">
            <div v-for="unit in availableUnits" :key="unit.value" class="flex items-center">
              <input
                type="checkbox"
                :id="unit.value"
                v-model="newIngredient.units"
                :value="unit.value"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              >
              <label :for="unit.value" class="ml-2 block text-sm text-gray-900">
                {{ unit.label }}
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Kategorie</label>
          <select
            id="category"
            v-model="newIngredient.category"
            class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="vegetables">Gemüse</option>
            <option value="fruits">Obst</option>
            <option value="dairy">Milchprodukte</option>
            <option value="meat">Fleisch</option>
            <option value="grains">Getreideprodukte</option>
            <option value="spices">Gewürze</option>
            <option value="other">Sonstiges</option>
          </select>
        </div>
        
        <div class="flex justify-end space-x-4">
          <button type="button" @click="$emit('cancel')" class="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300">
            Abbrechen
          </button>
          <button type="submit" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300">
            Zutat hinzufügen
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const newIngredient = ref({
    name: '',
    units: [],
    category: 'other'
  });
  
  const availableUnits = [
    { value: 'g', label: 'Gramm (g)' },
    { value: 'kg', label: 'Kilogramm (kg)' },
    { value: 'ml', label: 'Milliliter (ml)' },
    { value: 'l', label: 'Liter (l)' },
    { value: 'stk', label: 'Stück' },
    { value: 'el', label: 'Esslöffel' },
    { value: 'tl', label: 'Teelöffel' }
  ];
  
  const addIngredient = () => {
    // Hier würde die Logik zum Hinzufügen der neuen Zutat implementiert werden
    console.log('Neue Zutat hinzugefügt:', newIngredient.value);
    // Emit an event to the parent component with the new ingredient data
    emit('add', newIngredient.value);
    // Reset the form
    newIngredient.value = { name: '', units: [], category: 'other' };
  };
  
  const emit = defineEmits(['add', 'cancel']);
  </script>