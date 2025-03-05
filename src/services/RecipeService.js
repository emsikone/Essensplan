// 📁 services/RecipeService.js
import { ApiService } from './ApiService';
import { fileUploadService } from './FileUploadService';

class RecipeService extends ApiService {
  async getAllRecipes() {
    return this.fetchCollection('recipes');
  }

  async createRecipe(recipeData) {
    console.log('createRecipe', recipeData);
    return this.createRecord('recipes', recipeData);
  }

  async updateRecipe(recipeId, recipeData) {
    return this.updateRecord('recipes', recipeId, recipeData);
    // return this.pb.collection('recipes').update(recipeId, recipeData);
  }

  async deleteRecipe(recipeId) {
    return this.deleteRecord('recipes', recipeId);
    // return this.pb.collection('recipes').delete(recipeId);
  }

  async getRecipeById(recipeId) {
    return this.pb.collection('recipes').getOne(recipeId);
  }

  async uploadRecipeImage(recipeId, imageFile) {
    return fileUploadService.uploadFile('recipes', recipeId, imageFile, "image");
  }


}

export const recipeService = new RecipeService();
// 📁 services/RecipeService.js
