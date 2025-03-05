<template>
  <div class="bg-white rounded-3xl shadow-lg p-8">
    <h2 class="text-3xl font-bold text-indigo-600 mb-6">{{ isEditing ? 'Rezept bearbeiten' : 'Neues Rezept erstellen' }}</h2>

    <RecipeFormComponent :recipe="recipe" :isEditing="isEditing" @save="saveRecipe" @cancel="cancel"
      @delete="deleteRecipe" />


  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import RecipeFormComponent from '../components/RecipeFormComponent.vue';
import { recipeService } from '@/services/RecipeService'; 
import { useRouter } from 'vue-router';

// Zugriff auf den Router-Parameter
const router = useRouter();

// Props
const props = defineProps({
  id: {
    type: String,
    default: null
  }
});

// Rezept bearbeiten oder erstellen
const isEditing = computed(() => !!props.id); // Überprüfen, ob eine ID in der URL vorhanden ist

const recipe = ref({
  user_id: 'test',
  name: '',
  description: '',
  image: "",
  ingredients: [],
  meal_type: '',
  steps: []
});

onMounted(async () => {
  if (isEditing.value) {
    try {
      const recipeData = await recipeService.getRecipeById(props.id);
      console.log('Rezeptdaten:', recipeData);

      // Sicherstellen, dass recipe immer ein Objekt ist
      Object.assign(recipe.value, recipeData);
    } catch (error) {
      console.log('Error fetching recipe:', error);
    }
  }
});

onMounted(async () => {
  if (isEditing.value) {
    try {
      const recipeData = await recipeService.getRecipeById(props.id);
      console.log('Rezeptdaten:', recipeData);

      recipe.value = recipeData;  // Jetzt setzen wir das richtige Objekt
    } catch (error) {
      console.log('Error fetching recipe:', error);
    }
  } else {
    // Neues Rezept mit Standardwerten initialisieren
    recipe.value = {
      user_id: 'test',
      name: '',
      description: '',
      image: "",
      ingredients: [],
      meal_type: '',
      steps: []
    };
  }
});

const saveRecipe = async (updatedRecipe) => {
  if (isEditing.value) {
    console.log('Rezept aktualisieren:', updatedRecipe);
    
    try {
      const record = await recipeService.updateRecipe(props.id, updatedRecipe);
      console.log('Rezept aktualisiert:', record);
      router.push(`/recipe/${record.id}`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  } else {
    console.log('Rezept speichern:', updatedRecipe);
    try {
      console.log('vor Rezept speichern:', updatedRecipe);
    
      const record = await recipeService.createRecipe(updatedRecipe);
      
      console.log('Rezept gespeichert:', record);
      router.push(`/recipe/${record.id}`);
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  }
};


const deleteRecipe = async () => {
  // Hier würde die Logik zum Löschen des Rezepts implementiert werden
  console.log('Rezept löschen');

  try {
    await recipeService.deleteRecipe(recipe.value.id);
  } catch (error) {
    console.error('Error deleting recipe:', error);

  }


  router.push('/recipes');
};

const cancel = () => {
  // Hier würde die Logik zum Abbrechen implementiert werden
  console.log('Vorgang abgebrochen');

  //Abfrage ob wirklich abgebrochen werden soll
  router.push('/recipes');

};
</script>
