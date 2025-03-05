// 📁 services/UserService.js
import { ApiService } from './ApiService';

class UserService extends ApiService {
  async registerUser(userData) {
    return this.createRecord('users', userData);
  }

  async getProfile() {
    return this.currentUser;
  }
}

export const userService = new UserService();
