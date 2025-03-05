<template>
    <div>
        <h3 class="text-lg font-semibold text-indigo-600 mb-2">Zubereitungsschritte</h3>
        <ul class="space-y-2">
          <li v-for="(step, index) in localSteps" :key="index" class="flex items-start space-x-2">
            <span class="mt-2 text-indigo-600 font-semibold">{{ index + 1 }}.</span>
            <textarea :value="step" @input="updateStep(index, $event.target.value)" rows="2"
              class="flex-grow px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
            <button @click="removeStep(index)" type="button" class="mt-2 text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        </ul>
        <button @click="addStep" type="button"
          class="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
          + Schritt hinzufügen
        </button>
      </div>
</template>
<script setup>

// Importe aus Vue
import { ref, watch } from 'vue';

// Props und Emits
const props = defineProps({ steps: Array });
const emit = defineEmits(['update']);
const localSteps = ref([...props.steps]);

// Funktionen zum Hinzufügen, Entfernen und Aktualisieren von Schritten
const addStep = () => {
    localSteps.value.push('');
    emit('update', localSteps.value);
};

const removeStep = (index) => {
    localSteps.value.splice(index, 1);
    emit('update', localSteps.value);
};

const updateStep = (index, newValue) => {
    localSteps.value[index] = newValue;
    emit('update', localSteps.value);
};

watch(() => props.steps, (newSteps) => {
    localSteps.value = [...newSteps]; // Erstellt eine neue Referenz für Vue's Reaktivität
}, { deep: true });

</script>