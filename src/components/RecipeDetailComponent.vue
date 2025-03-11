
<style>
.recipe-detail {
max-width: 800px;
margin: 0 auto;
padding: 0 1rem;
}
</style>

<template>
  

    <div class="recipe-detail">
      <GoBackArrowComponent />

      <!-- Header mit Bild und Grundinformationen -->
      <div class="relative mb-8">
        <div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden">
          <img :src="getImageURL(recipe)" :alt="recipe.name" class="w-full h-full object-cover">
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-3xl">
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ recipe.name }}</h1>

          <!--Icons unter Rezepttitel -->
          <div class="flex flex-wrap items-center gap-4 text-white">

            <!-- Zubereitungszeit -->
            <div class="flex items-center" v-if = "recipe.prepTime">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ recipe.prepTime }} Min. Zubereitung</span>
            </div>

            <!-- Portionen -->
            <div class="flex items-center" v-if="recipe.servings">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{{ recipe.servings }} Portionen</span>
            </div>

            <!-- Schwierigkeitsgrad -->
            <div class="flex items-center" v-if="recipe.difficulty">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>{{ recipe.difficulty }}</span>
            </div>

            <!-- Meal Type -->
            <div class="flex items-center" v-if="recipe.meal_type">
                <MealTypeIcon class="h-5 w-5 mr-1" />
                <span>{{ recipe.meal_type }}</span>
            </div>

          </div>
        </div>
      </div>
      
      <!-- Aktionsleiste -->
      <div class="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div class="flex items-center space-x-2">
          <!-- <button class="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Favorit
          </button> -->
          <!-- Teilen Button -->
          <!-- <button class="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Teilen
          </button> -->
        </div>
        
        <div class="flex items-center space-x-2">

        <!-- Bearbeiten Button -->
          <button @click="$router.push({ name: 'edit-recipe', params: { id: recipe.id } })"
           class="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors duration-300">
            <PencilIcon class="h-5 w-5 mr-1" />
            Bearbeiten
            
          </button>

            <!-- Drucken Button -->
          <button class="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Drucken
          </button>

          <!-- Einkaufsliste Button -->
          <button class="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Zur Einkaufsliste
          </button>
        </div>
      </div>
      
      <!-- Beschreibung -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Beschreibung</h2>
        <p class="text-gray-700 leading-relaxed">{{ recipe.description }}</p>
      </div>
      
      <!-- Portionsrechner -->
      <!-- <div class="mb-8 bg-indigo-50 p-4 rounded-2xl">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-indigo-600">Zutaten</h2>
          <div class="flex items-center space-x-4">
            <span class="text-gray-700">Portionen:</span>
            <div class="flex items-center">
              <button 
                @click="updateServings(-1)" 
                class="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-indigo-600 hover:bg-indigo-100"
                :disabled="servings <= 1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <span class="mx-3 text-lg font-medium text-indigo-600">{{ servings }}</span>
              <button 
                @click="updateServings(1)" 
                class="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-indigo-600 hover:bg-indigo-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <ul class="mt-4 space-y-2">
          <li v-for="(ingredient, index) in scaledIngredients" :key="index" class="flex items-center p-2 bg-white rounded-xl">
            <div class="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full mr-3">
              <span class="text-indigo-600 font-medium">{{ index + 1 }}</span>
            </div>
            <div class="flex-grow">
              <span class="font-medium">{{ ingredient.name }}</span>
            </div>
            <div class="text-right">
              <span class="font-medium text-indigo-600">{{ ingredient.amount }}</span>
            </div>
          </li>
        </ul>
      </div> -->
      
      <!-- Zubereitungsschritte -->
      <div class="mb-8" v-if="recipe.steps && recipe.steps.length > 0">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Zubereitung</h2>
        <ol class="space-y-6">
          <li v-for="(step, index) in recipe.steps" :key="index" class="flex">
            <div class="mr-4">
              <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-bold">
                {{ index + 1 }}
              </div>
            </div>
            <div class="flex-grow bg-gray-50 p-4 rounded-2xl">
              <p class="text-gray-700">{{ step }}</p>
            </div>
          </li>
        </ol>
      </div>
      
      <!-- Nährwerte -->
      <!-- <div class="mb-8" v-if="recipe.nutrition">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Nährwerte pro Portion</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-50 p-4 rounded-2xl text-center">
            <div class="text-xl font-bold text-indigo-600">{{ recipe.nutrition.calories }}</div>
            <div class="text-gray-600">Kalorien</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-2xl text-center">
            <div class="text-xl font-bold text-indigo-600">{{ recipe.nutrition.protein }}g</div>
            <div class="text-gray-600">Protein</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-2xl text-center">
            <div class="text-xl font-bold text-indigo-600">{{ recipe.nutrition.carbs }}g</div>
            <div class="text-gray-600">Kohlenhydrate</div>
          </div>
          <div class="bg-gray-50 p-4 rounded-2xl text-center">
            <div class="text-xl font-bold text-indigo-600">{{ recipe.nutrition.fat }}g</div>
            <div class="text-gray-600">Fett</div>
          </div>
        </div>
      </div> -->
      
      <!-- Tipps -->
      <!-- <div class="mb-8" v-if="recipe.tips && recipe.tips.length > 0">
        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Tipps</h2>
        <div class="bg-yellow-50 p-4 rounded-2xl">
          <ul class="space-y-2">
            <li v-for="(tip, index) in recipe.tips" :key="index" class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span class="text-gray-700">{{ tip }}</span>
            </li>
          </ul>
        </div> 
      </div> -->
    </div>
  </template> 

    
  
  <script setup>
  import { ref, onMounted /*computed*/ } from 'vue';  
  import { recipeService } from '@/services/RecipeService'; 

  import GoBackArrowComponent from './GoBackArrowComponent.vue';

  // ICONS
  import MealTypeIcon from '../assets/icons/meal-type.svg';
  import PencilIcon from '../assets/icons/pencil.svg';

  const props = defineProps({
    id: {
      type: String,
      default: null
    }
  });

  // Beispiel-Rezept (würde normalerweise über Props oder API-Aufruf kommen)
  const recipe = ref({
    id: 1,
    name: '',
    image: '',
    description: '',
    prepTime: 0, // Zubereitungszeit in Minuten
    servings: 0, // Anzahl der Portionen
    difficulty: 'Einfach',
    meal_type: 'Mittagessen',
    ingredients: [ // Zutatenliste
    //   { name: 'Quinoa', amount: '200g' },
    ],
    steps: [],
    nutrition: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    },
    tips: []
  });
  
  onMounted(async () => {
    
    try {
    const recipeData = await recipeService.getRecipeById(props.id);
    console.log('Rezeptdaten:', recipeData);

    // Sicherstellen, dass recipe immer ein Objekt ist
    Object.assign(recipe.value, recipeData);
    } catch (error) {
    console.log('Error fetching recipe:', error);
    }

});


    const PB_BASE_URL = "http://192.168.1.25:8080";

    const getImageURL = (recipe) => {
    return recipe.image
        ? `${PB_BASE_URL}/api/files/recipes/${recipe.id}/${recipe.image}`
        : "https://placehold.co/400"; // Fallback-Bild
    };






  // Portionsrechner
//   const servings = ref(recipe.servings);
  
//   const updateServings = (change) => {
//     const newServings = servings.value + change;
//     if (newServings >= 1) {
//       servings.value = newServings;
//     }
//   };
  
  // Berechnung der skalierten Zutatenmengen
//   const scaledIngredients = computed(() => {
//     const scaleFactor = servings.value / recipe.servings;
    
//     return recipe.ingredients.map(ingredient => {
//       // Nur numerische Werte skalieren
//       const originalAmount = ingredient.amount;
//       let scaledAmount = originalAmount;
      
//       // Regex um Zahlen aus dem String zu extrahieren
//       const numberMatch = originalAmount.match(/[\d.,]+/);
      
//       if (numberMatch) {
//         const originalNumber = parseFloat(numberMatch[0].replace(',', '.'));
//         const scaledNumber = (originalNumber * scaleFactor).toFixed(1).replace(/\.0$/, '').replace('.', ',');
//         scaledAmount = originalAmount.replace(numberMatch[0], scaledNumber);
//       }
      
//       return {
//         name: ingredient.name,
//         amount: scaledAmount
//       };
//     });
//   });



  </script>
  

