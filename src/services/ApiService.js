import PocketBase from "pocketbase";

export class ApiService {
  constructor(baseUrl = "http://192.168.1.25:8080") {
    this.pb = new PocketBase(baseUrl);
    this.pb.autoCancellation(false)
  }

  async login(email, password) {
    try {
      const authData = await this.pb
        .collection("users")
        .authWithPassword(email, password);
      return authData;
    } catch (error) {
      console.error("Login-Fehler:", error.message);
      throw error;
    }
  }

  async logout() {
    this.pb.authStore.clear();
  }

  get isAuthenticated() {
    return this.pb.authStore.isValid;
  }

  get currentUser() {
    return this.pb.authStore.model;
  }

  async fetchCollection(collectionName, filter = "") {
    try {
      return await this.pb.collection(collectionName).getFullList({ filter });
    } catch (error) {
      console.error(
        `Fehler beim Abrufen von ${collectionName}:`,
        error.message
      );
      throw error;
    }
  }

  async createRecord(collectionName, data) {
    console.log('createRecord', collectionName, data);
    
    try {
      return await this.pb.collection(collectionName).create(data);
    //   const record = await pb.collection('recipes').create(data);
    } catch (error) {
      console.error(
        `Fehler beim Erstellen eines Eintrags in ${collectionName}:`,
        error.message
      );
      throw error;
    }
  }

  async updateRecord(collectionName, id, data) {
    try {
      return await this.pb.collection(collectionName).update(id, data);
    } catch (error) {
      console.error(
        `Fehler beim Aktualisieren eines Eintrags in ${collectionName}:`,
        error.message
      );
      throw error;
    }
  }

  async deleteRecord(collectionName, id) {
    return this.pb.collection(collectionName).delete(id);
  }
}
