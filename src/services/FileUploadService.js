import { ApiService } from './ApiService';

class FileUploadService extends ApiService {
  async uploadFile(collectionName, recordId, file, fileField = "image") {
    if (!file) {
      console.warn("Kein Datei-Upload nötig, da keine Datei ausgewählt wurde.");
      return null;
    }

    const formData = new FormData();
    formData.append(fileField, file); // `fileField` sollte dem Feld in PocketBase entsprechen

    try {
      const updatedRecord = await this.updateRecord(collectionName, recordId, formData);
      return updatedRecord;
    } catch (error) {
      console.error("Fehler beim Datei-Upload:", error);
      throw error;
    }
  }
}

// Singleton-Export, damit überall nur eine Instanz genutzt wird
export const fileUploadService = new FileUploadService();
// 📁 services/FileUploadService.js