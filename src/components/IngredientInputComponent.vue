<template>
  <div>
    <h3 class="text-lg font-semibold text-indigo-600 mb-2">Zutaten</h3>
    <ul class="space-y-2">
      <li v-for="(ingredient, index) in localIngredients" :key="index" class="flex items-center space-x-2">

        <ComboBoxComponent />

        <input type="text" v-model="ingredient.amount" placeholder="Menge" :disabled="!ingredient.id"
          class="w-2/6 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
        <label for="unit" class="sr-only">Einheit</label>
        <select v-model="ingredient.unit" :disabled="!ingredient.id"
          class="w-1/6 flex-grow px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option v-for="unit in ingredient.units" :key="unit.id" :value="unit">{{ unit }}</option>
        </select>
        <button @click="removeIngredient(index)" type="button" class="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
import { onMounted, ref, watch } from 'vue';
import { ingredientService } from '@/services/IngredientService';
import ComboBoxComponent from './ComboBoxComponent.vue';

const props = defineProps({
  ingredients: Array
});
const emit = defineEmits(['update']);

let ingredientOptions = ref([]);
const query = ref('');

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
  localIngredients.value.push(newIngredient);
  emit('update', localIngredients.value);
};

const removeIngredient = (index) => {
  localIngredients.value.splice(index, 1);
  emit('update', localIngredients.value);
};

const fetchUnits = async (ingredient) => {
  console.log(fetchUnits);
  
  if (!ingredient.id) return;
  try {
    Object.assign(ingredient, {
      units: await ingredientService.getIngredientUnits(ingredient.id) || [],
      unit: ingredient.unit || null,
    });
  } catch (error) {
    console.error('Error fetching units:', error);
  }
};


onMounted(fetchIngredients);

watch(() => props.ingredients, (newIngredients) => {
  localIngredients.value = [...newIngredients];
}, { deep: true });
</script>