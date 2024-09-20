import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiEntity, PoiSelectors } from '@packt/poi';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  poi$: Observable<PoiEntity | undefined>;
  constructor(private store: Store) {
    this.poi$ = this.store.select(PoiSelectors.selectEntity)
  }
}
