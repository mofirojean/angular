import { Injectable } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  // read current position from GPS
  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  // take a photo
  async takePhoto() {
    await this.getLocation();
    await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
