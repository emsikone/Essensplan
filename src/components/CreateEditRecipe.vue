<template>
  <div class="bg-white rounded-3xl shadow-lg p-8">
    <h2 class="text-3xl font-bold text-indigo-600 mb-6">{{ isEditing ? 'Rezept bearbeiten' : 'Neues Rezept erstellen' }}</h2>
    
    <form @submit.prevent="saveRecipe" class="space-y-6">
      <div>
        <label for="recipeName" class="block text-sm font-medium text-gray-700 mb-1">Rezeptname</label>
        <input
          type="text"
          id="recipeName"
          v-model="recipe.name"
          class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        >
      </div>
      
      <div>
        <label for="recipeDescription" class="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
        <textarea
          id="recipeDescription"
          v-model="recipe.description"
          rows="3"
          class="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        ></textarea>
      </div>
      
      <div>
        <label for="recipeImage" class="block text-sm font-medium text-gray-700 mb-1">Bild hochladen</label>
        <input
          type="file"
          id="recipeImage"
          @change="handleImageUpload"
          accept="image/*"
          class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
      </div>
      
      <div>
        <h3 class="text-lg font-semibold text-indigo-600 mb-2">Zutaten</h3>
        <ul class="space-y-2">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index" class="flex items-center space-x-2">
            <input
              type="text"
              v-model="ingredient.name"
              placeholder="Zutat"
              class="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
            <input
              type="text"
              v-model="ingredient.amount"
              placeholder="Menge"
              class="w-24 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
            <button @click="removeIngredient(index)" type="button" class="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        </ul>
        <button @click="addIngredient" type="button" class="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
          + Zutat hinzufügen
        </button>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold text-indigo-600 mb-2">Zubereitungsschritte</h3>
        <ul class="space-y-2">
          <li v-for="(step, index) in recipe.steps" :key="index" class="flex items-start space-x-2">
            <span class="mt-2 text-indigo-600 font-semibold">{{ index + 1 }}.</span>
            <textarea
              :value="step"
              @input="updateStep(index, $event.target.value)"
              rows="2"
              class="flex-grow px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            ></textarea>
            <button @click="removeStep(index)" type="button" class="mt-2 text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        </ul>
        <button @click="addStep" type="button" class="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
          + Schritt hinzufügen
        </button>
      </div>
      
      <div class="flex justify-end space-x-4">
        <button type="button" @click="cancel" class="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300">
          Abbrechen
        </button>
        <button type="submit" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300">
          {{ isEditing ? 'Änderungen speichern' : 'Rezept erstellen' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  editingRecipe: {
    type: Object,
    default: null
  }
});

const isEditing = computed(() => !!props.editingRecipe);

const recipe = ref(props.editingRecipe || {
  name: '',
  description: '',
  image: null,
  ingredients: [],
  steps: []
});

const addIngredient = () => {
  recipe.value.ingredients.push({ name: '', amount: '' });
};

const removeIngredient = (index) => {
  recipe.value.ingredients.splice(index, 1);
};

const addStep = () => {
  recipe.value.steps.push('');
};

const removeStep = (index) => {
  recipe.value.steps.splice(index, 1);
};

const updateStep = (index, newValue) => {
  recipe.value.steps[index] = newValue;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    recipe.value.image = file;
  }
};

const saveRecipe = () => {
  // Hier würde die Logik zum Speichern des Rezepts implementiert werden
  console.log('Rezept gespeichert:', recipe.value);
};

const cancel = () => {
  // Hier würde die Logik zum Abbrechen implementiert werden
  console.log('Vorgang abgebrochen');
};
</script>
