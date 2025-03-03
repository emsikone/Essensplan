<template>
    <div>
      <EditIngredients v-if="!isAddingNewIngredient" @add-ingredient="isAddingNewIngredient = true" />
      <AddIngredient v-else @add="addNewIngredient" @cancel="isAddingNewIngredient = false" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import EditIngredients from './EditIngredients.vue';
  import AddIngredient from './AddIngredient.vue';
  
  const isAddingNewIngredient = ref(false);
  
  const addNewIngredient = (newIngredient) => {
    // Hier würde die Logik zum Hinzufügen der neuen Zutat zur Gesamtliste implementiert werden
    console.log('Neue Zutat zur Liste hinzugefügt:', newIngredient);
    isAddingNewIngredient.value = false;
  };
  </script>