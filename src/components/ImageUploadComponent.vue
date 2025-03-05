<template>
  <div>
    <!-- Bild anzeigen -->
    <div v-if="imageUrl" class="mt-4">
      <img :src="imageUrl" alt="Rezeptbild" class="w-full h-64 object-cover rounded-lg">
    </div>

    <!-- Bild hochladen -->
    <div>
      <label for="recipeImage" class="block text-sm font-medium text-gray-700 mb-1">Bild hochladen</label>
      <input type="file" id="recipeImage" @change="handleImageUpload" accept="image/*"
        class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { recipeService } from '@/services/RecipeService';

const PB_BASE_URL = 'http://192.168.1.25:8080'; // Deine PocketBase-URL
const COLLECTION_NAME = 'recipes'; // Name der Collection

const props = defineProps({
  recipeId: String, // ID des Rezepts für den Upload
  image: String // Nur der Dateiname
});

const localImage = ref(props.image || null);
const emit = defineEmits(['update:image']);

// Berechnete Bild-URL
const imageUrl = computed(() => {
  return props.image ? `${PB_BASE_URL}/api/files/${COLLECTION_NAME}/${props.recipeId}/${props.image}` : '';
});

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (file && props.recipeId) {
    try {
      const updatedRecipe = await recipeService.uploadRecipeImage(props.recipeId, file);
      console.log("localImage.value", localImage.value);
      
      emit('update:image', updatedRecipe.image);
    } catch (error) {
      console.error("Fehler beim Hochladen:", error);
    }
  }
};

// Watch für Änderungen am Bildnamen
watch(() => props.image, (newImage) => {
  console.log("Neues Bild erhalten:", newImage);
});
</script>
