import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import CreateEditRecipe from '@/components/CreateEditRecipe.vue';
import RecipesPage from '@/components/RecipesPage.vue';
import MealPlanPage from '@/components/MealPlanPage.vue';
import ShoppingListPage from '@/components/ShoppingListPage.vue';
import IngredientManager from '@/components/IngredientManager.vue';	

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/create-recipe', name: 'create-edit-recipe', component: CreateEditRecipe },
  { path: '/recipe/:id', name: 'recipe-detail', component: CreateEditRecipe, props: true},
  { path: '/recipes', name: 'recipes', component: RecipesPage },
  { path: '/meal-plan', name: 'meal-plan', component: MealPlanPage },
  { path: '/shopping-list', name: 'shopping-list', component: ShoppingListPage },
  { path: '/ingredients-manager', name: 'ingredients-manager', component: IngredientManager }
];

// const activeTab = ref('home');

// const tabs = [
//   { id: 'home', name: 'Startseite' },
//   { id: 'recipes', name: 'Rezepte' },
//   { id: 'meal-plan', name: 'Wochenplan' },
//   { id: 'shopping-list', name: 'Einkaufsliste' },
//   { id: 'ingredients-manager', name: 'Zutaten bearbeiten' },
//   { id: 'create-edit-recipe', name: 'Rezept erstellen/bearbeiten' }
// ];



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;