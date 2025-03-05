import {defineStore } from 'pinia';

export const useStores = defineStore({'isLoggedIn': false, 'user': null, 'recipes': [], 'ingredients': [], 'mealPlan': [], 'shoppingList': []});



export const useUserStore = defineStore({
    state: () => ({
        isLoggedIn: false,
        user: null
    }),
    actions: {
        login(user) {
            this.isLoggedIn = true;
            this.user = user;
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
        }
    }
});
   
// export const useRecipeStore = defineStore({'recipes': []});
// export const useIngredientStore = defineStore({'ingredients': []});
// export const useMealPlanStore = defineStore({'mealPlan': []});
// export const useShoppingListStore = defineStore({'shoppingList': []});
// export const useActiveTab = defineStore({'activeTab': 'home'});
// export const useTabs = defineStore({'tabs': [
//   { id: 'home', name: 'Startseite' },
//   { id: 'recipes', name: 'Rezepte' },
//   { id: 'meal-plan', name: 'Wochenplan' },
//   { id: 'shopping-list', name: 'Einkaufsliste' },
//   { id: 'ingredients-manager', name: 'Zutaten bearbeiten' },
//   { id: 'create-edit-recipe', name: 'Rezept erstellen/bearbeiten' }
// ]});
// export const useRecipeDetail = defineStore({'recipe': null});
// export const useRecipeId = defineStore({'recipeId': null});
// export const useIngredientDetail = defineStore({'ingredient': null});
// export const useIngredientId = defineStore({'ingredientId': null});
// export const useMealPlanDetail = defineStore({'mealPlan': null});
// export const useMealPlanId = defineStore({'mealPlanId': null});
// export const useShoppingListDetail = defineStore({'shoppingList': null});
// export const useShoppingListId = defineStore({'shoppingListId': null});
// export const useIngredientManager = defineStore({'ingredients': []});
// export const useIngredientManagerDetail = defineStore({'ingredient': null});
// export const useIngredientManagerId = defineStore({'ingredientId': null});
// export const useRecipeManager = defineStore({'recipes': []});
// export const useRecipeManagerDetail = defineStore({'recipe': null});
// export const useRecipeManagerId = defineStore({'recipeId': null});
// export const useMealPlanManager = defineStore({'mealPlan': []});
// export const useMealPlanManagerDetail = defineStore({'mealPlan': null});