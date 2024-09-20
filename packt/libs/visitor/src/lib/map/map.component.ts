import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiEntity, PoiSelectors } from '@packt/poi';
import { Observable } from 'rxjs';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'lib-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;
  poi$: Observable<PoiEntity | undefined>;

  constructor(private store: Store) {
    this.poi$ = this.store.select(PoiSelectors.selectEntity)
  }

  showInfo(marker: MapMarker) {
    this.info?.open(marker);
  }
}
