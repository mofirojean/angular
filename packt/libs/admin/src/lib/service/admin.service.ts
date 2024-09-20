import { Injectable } from '@angular/core';
import { PoiEntity } from '@packt/poi';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() {
  }

  getStatics(pois: PoiEntity[]) {
    return pois.map(poi => {
      const stat = localStorage.getItem('tour-' + poi.id) ?? 0;
      return +stat;
    });
  }
}
