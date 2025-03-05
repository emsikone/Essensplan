
<template>
    <form @submit.prevent="saveRecipe" class="space-y-6">
        <!-- Rezeptname -->
        <div>
            <label for="recipeName" class="block text-sm font-medium text-gray-700 mb-1">Rezeptname</label>
            <input type="text" id="recipeName" v-model="localRecipe.name"
                class="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required>
        </div>

        <!-- Beschreibung -->
        <div>
            <label for="recipeDescription" class="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
            <textarea id="recipeDescription" v-model="localRecipe.description" rows="3"
                class="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required></textarea>
        </div>

        <!-- Bild-Upload -->
        <!-- <ImageUploadComponent :recipe="localRecipe" @update:image="localRecipe.image = $event" /> -->
        <ImageUploadComponent :recipeId="localRecipe.id" :image="localRecipe.image" @update:image="localRecipe.image = $event" />


        <!-- Zutaten -->
        <IngredientInputComponent :ingredients="localRecipe.ingredients" @update="updateIngredients" />

        <!-- Schritte -->
        <StepInputComponent :steps="localRecipe.steps" @update="updateSteps" />

        <!-- Buttons -->
        <div class="flex justify-end space-x-4">
            <button v-if="isEditing" type="button" @click="deleteRecipe"
                class="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300">
                Rezept löschen
            </button>
            <button type="button" @click="cancel"
                class="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300">
                Abbrechen
            </button>
            <button type="submit"
                class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300">
                {{ isEditing ? 'Änderungen speichern' : 'Rezept erstellen' }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { reactive, onMounted, watch } from 'vue';
import IngredientInputComponent from './IngredientInputComponent.vue';
import StepInputComponent from './StepInputComponent.vue';
import ImageUploadComponent from './ImageUploadComponent.vue';

const props = defineProps({
    recipe: {
        type: Object,
        default: () => ({
            user_id: '',
            name: '',
            description: '',
            image: '',
            ingredients: [],
            steps: []
        })
    },
    isEditing: {
        type: Boolean,
        default: false
    }
});

const localRecipe = reactive({ ...props.recipe });  // Object kopieren, um reaktive Änderungen zu erlauben

const emit = defineEmits(['save', 'cancel', 'delete']);

const updateIngredients = (newIngredients) => {
    localRecipe.ingredients = newIngredients;  // Zutaten-Array aktualisieren
};

const updateSteps = (newSteps) => {
    localRecipe.steps = newSteps;  // Schritte-Array aktualisieren
};

const saveRecipe = () => {
    emit('save', localRecipe); // Kein .value nötig bei reactive
};

const deleteRecipe = () => {
    emit('delete'); // Kein .value nötig bei reactive
};

const cancel = () => {
    emit('cancel');
};

onMounted(() => {
    console.log('isEditing', props.isEditing);
    console.log('localRecipe', localRecipe);
});


// Watch für Änderungen der `props.recipe` und synchronisieren
watch(() => props.recipe, (newRecipe) => {
    Object.assign(localRecipe, newRecipe);
}, { immediate: true, deep: true });  // `deep: true` stellt sicher, dass auch Arrays und Objekte erkannt werden

</script>
