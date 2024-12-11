import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  async takePhoto(): Promise<string> {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,  // Obtenemos la URI de la imagen
      source: CameraSource.Camera,      // Usa la cámara del dispositivo
      quality: 90,                      // Calidad de la imagen
    });

    const savedImageFile = await this.savePhoto(photo);
    return savedImageFile;
  }

  private async savePhoto(photo: Photo): Promise<string> {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = await this.convertBlobToBase64(blob);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data as string,
      directory: Directory.Data,
    });

    return savedFile.uri;
  }

  private convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
    });
  }
  async savePhotoUri(uri: string) {

    const { value } = await Preferences.get({ key: 'photos' });
    const photos = value ? JSON.parse(value) : [];
    photos.push(uri);
    await Preferences.set({ key: 'photos', value: JSON.stringify(photos) });
  }
  
  async loadPhotos(): Promise<string[]> {
    const { value } = await Preferences.get({ key: 'photos' });
    return value ? JSON.parse(value) : [];
    
  }
}

