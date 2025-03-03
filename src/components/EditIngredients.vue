<template>
  <div class="bg-white rounded-3xl shadow-lg p-8">
    <h2 class="text-3xl font-bold text-indigo-600 mb-6">Zutaten bearbeiten</h2>
    
    <div class="space-y-4">
      <div v-for="(ingredient, index) in ingredients" :key="index" class="bg-gray-50 rounded-2xl p-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-indigo-600">{{ ingredient.name }}</h3>
          <div class="space-x-2">
            <button @click="toggleEdit(index)" class="text-blue-500 hover:text-blue-700">
              {{ ingredient.isEditing ? 'Schließen' : 'Bearbeiten' }}
            </button>
            <button @click="removeIngredient(index)" class="text-red-500 hover:text-red-700">
              Löschen
            </button>
          </div>
        </div>
        
        <div v-if="ingredient.isEditing" class="mt-4 space-y-4">
          <div v-for="(unit, unitIndex) in ingredient.units" :key="unitIndex" class="grid grid-cols-1 md:grid-cols-3 gap-4">
 
            <div>
              <label :for="'unit-' + index + '-' + unitIndex" class="block text-sm font-medium text-gray-700 mb-1">Einheit</label>
              <select
                :id="'unit-' + index + '-' + unitIndex"
                v-model="unit.unit"
                class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="g">Gramm (g)</option>
                <option value="kg">Kilogramm (kg)</option>
                <option value="ml">Milliliter (ml)</option>
                <option value="l">Liter (l)</option>
                <option value="stk">Stück</option>
                <option value="el">Esslöffel</option>
                <option value="tl">Teelöffel</option>
              </select>
            </div>
            <div>
              <button @click="removeUnit(index, unitIndex)" class="mt-6 text-red-500 hover:text-red-700">
                Einheit entfernen
              </button>
            </div>
          </div>
          <button @click="addUnit(index)" class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
            + Einheit hinzufügen
          </button>
          <div>
            <label :for="'category-' + index" class="block text-sm font-medium text-gray-700 mb-1">Kategorie</label>
            <select
              :id="'category-' + index"
              v-model="ingredient.category"
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
        </div>
      </div>
    </div>
    
    <div class="mt-8 flex justify-between">
      <button @click="$emit('add-ingredient')" class="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300">
        + Neue Zutat hinzufügen
      </button>
      <button @click="saveIngredients" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300">
        Änderungen speichern
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const ingredients = ref([
  { 
    name: 'Tomaten', 
    category: 'vegetables',
    units: [
      { unit: 'g' },
      { unit: 'stk' }
    ],
    isEditing: false
  },
  { 
    name: 'Milch', 
    category: 'dairy',
    units: [
      { amount: '1', unit: 'l' }
    ],
    isEditing: false
  },
]);

const toggleEdit = (index) => {
  ingredients.value[index].isEditing = !ingredients.value[index].isEditing;
};

const removeIngredient = (index) => {
  ingredients.value.splice(index, 1);
};

const addUnit = (index) => {
  ingredients.value[index].units.push({ amount: '', unit: 'g' });
};

const removeUnit = (ingredientIndex, unitIndex) => {
  ingredients.value[ingredientIndex].units.splice(unitIndex, 1);
};

const saveIngredients = () => {
  // Hier würde die Logik zum Speichern der Zutaten implementiert werden
  console.log('Zutaten gespeichert:', ingredients.value);
};

defineEmits(['add-ingredient']);
</script>