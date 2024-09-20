import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { Observable } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrl: './poi-list.component.css'
})
export class PoiListComponent implements OnInit {
  pois$!: Observable<PoiEntity[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(PoiActions.initPoi());
    this.pois$ = this.store.select(PoiSelectors.selectAllPoi);
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({poiId: poi.id}))
  }
}
