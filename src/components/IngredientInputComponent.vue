<template>
<div>
    <h3 class="text-lg font-semibold text-indigo-600 mb-2">Zutaten</h3>
    <ul class="space-y-2">
      <li v-for="(ingredient, index) in localIngredients" :key="index" class="flex items-center space-x-2">

        <!-- <input type="text" v-model="ingredient.name" placeholder="Zutat"
          class="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"> -->
        <select v-model="ingredient.id" @change="fetchUnits(ingredient)" @click="logging"
          class="w-1/2 flex-grow px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">

          <option v-for="ingredientOption in ingredientOptions" :key="ingredientOption.id" :value="ingredientOption.id">{{
            ingredientOption.name }}</option>
        </select>


        <input type="text" v-model="ingredient.amount" placeholder="Menge"
          class="w-2/6 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
        <label for="unit" class="sr-only">Einheit</label>

        <select v-model="ingredient.unit"
          class="w-1/6 flex-grow px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option v-for="unit in ingredient.units" :key="unit.id" :value="unit">{{ unit }}</option>
        </select>




        <button @click="removeIngredient(index)" type="button" class="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </li>
    </ul>
    <button @click="addIngredient" type="button"
      class="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
      + Zutat hinzufügen
    </button>
  </div>
</template>

<script setup>

import { onMounted , ref, watch } from 'vue';

// Importiere RecipeService
import { ingredientService } from '@/services/IngredientService';


const props = defineProps({
  ingredients: Array
});
const emit = defineEmits(['update']);

let ingredientOptions = ref([]);

// Lokale Kopie von props.ingredients
const localIngredients = ref([...props.ingredients]);

const fetchIngredients = async () => {
  try {
    ingredientOptions.value = await ingredientService.getAllIngredients();
  } catch (error) {
    console.error('Fehler beim Laden der Zutaten:', error);
  }
};


const addIngredient = () => {
  const newIngredient = { id: null, amount: '', units: [], unit: null };
  console.log('vor Push');
  
  localIngredients.value.push(newIngredient);
  console.log('nach Push');
  // Emitte die neue Zutatenliste an den Parent
   emit('update', localIngredients.value);  // Oder props.ingredients falls du die übergebenen Props synchronisieren möchtest
};


const removeIngredient = (index) => {
  localIngredients.value.splice(index, 1);
  emit('update', localIngredients.value);
};



const fetchUnits = async (ingredient) => {
  if (!ingredient.id) return;

  try {

    Object.assign(ingredient, {
      units: await ingredientService.getIngredientUnits(ingredient.id) || [],
      unit: ingredient.unit || null, // Standardwert beibehalten
    });


  } catch (error) {
    console.error('Error fetching units:', error);
  }
};


onMounted(fetchIngredients);

watch(() => props.ingredients, (newIngredients) => {
  localIngredients.value = [...newIngredients]; // Erstellt eine neue Referenz, damit Vue die Änderung erkennt
}, { deep: true });

</script>