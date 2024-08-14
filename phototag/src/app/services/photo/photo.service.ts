import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Camera, CameraSource, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private firestore: Firestore,
    private storage: Storage
  ) { }

  // read current position from GPS
  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  // take a photo
  async takePhoto() {
    const { latitude, longitude } = await this.getLocation();
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });

    if (cameraPhoto.dataUrl) {
      await this.savePhoto(cameraPhoto.dataUrl, latitude, longitude);
    }
  }

  private async savePhoto(dataURL: string, latitude: number, longitude: number) {
    const name = new Date().getUTCMilliseconds().toString();
    const storageRef = ref(this.storage, name);
    await uploadString(storageRef, dataURL, 'data_url');
    const photoUrl = await getDownloadURL(storageRef);
    const photoCollection = collection(this.firestore, 'photos');
    await addDoc(photoCollection, {
      url: photoUrl,
      lat: latitude,
      lng: longitude
    })
  }
}
