// 📁 services/IngredientService.js
import { ApiService } from './ApiService';

class IngredientService extends ApiService {
  async getAllIngredients() {
    // console.log('fetching ingredients', await this.fetchCollection('ingredients'));
    
    return this.fetchCollection('ingredients');
  }

  async createIngredient(ingredientData) {
    return this.createRecord('ingredients', ingredientData);
  }

  async getIngredient(id) {
    return this.pb.collection('ingredients').getOne(id);
  }

//   async getIngredientUnits(id){
//     console.log('fetching ingredients', await this.pb.collection('ingredients').getOne(id).units);
//     return this.pb.collection('ingredients').getOne(id);
//   }

  async getIngredientUnits(id) {
    try {
      const response = await this.pb.collection('ingredients').getOne(id);
  
    console.log('fetching ingredients', response.units);
    
      // Extrahiere nur das 'units' Feld und gib es zurück
      return response.units;  // Angenommen, das Feld 'units' ist ein JSON-String und muss geparst werden
  
    } catch (error) {
      console.error('Fehler beim Abrufen der Zutat:', error);
      return null;  // Gebe null zurück, wenn ein Fehler auftritt
    }
  }


}

export const ingredientService = new IngredientService();
// 📁 services/IngredientService.js