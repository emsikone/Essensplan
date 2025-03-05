import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import CreateEditRecipe from '@/pages/CreateEditRecipePage.vue';
import RecipesPage from '@/pages/RecipesPage.vue';
import MealPlanPage from '@/components/MealPlanPage.vue';
import ShoppingListPage from '@/components/ShoppingListPage.vue';
import IngredientManager from '@/components/IngredientManager.vue';	
import LoginManager from '@/components/LoginManager.vue';


const routes = [
  { path: '/', 
    name: 'home', 
    component: HomePage, 
    meta: { isTab: true, tabName: 'Startseite' }},
  { path: '/login', 
    name: 'login', 
    component: LoginManager,
    meta: { isTab: true, tabName: 'Login' } },
  { path: '/create-recipe', 
    name: 'create-recipe', 
    component: CreateEditRecipe,
    meta: { isTab: true, tabName: 'Rezept erstellen' }},
  { path: '/recipe/:id', 
    name: 'recipe-detail', 
    component: CreateEditRecipe, 
    props: true,
    meta: { isTab: false, tabName: 'Rezept berabeiten' }},
  { path: '/recipes', 
    name: 'recipes', 
    component: RecipesPage,
    meta: { isTab: true, tabName: 'Rezeptübersicht' } },
  { path: '/meal-plan', 
    name: 'meal-plan', 
    component: MealPlanPage,
    meta: { isTab: true, tabName: 'Essensplan' }},
  { path: '/shopping-list', 
    name: 'shopping-list', 
    component: ShoppingListPage,
    meta: { isTab: true, tabName: 'Einkaufsliste' } },
  { path: '/ingredients-manager', 
    name: 'ingredients-manager', 
    component: IngredientManager,
    meta: { isTab: true, tabName: 'Zutaten Manager' } }
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