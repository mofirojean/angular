import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { ChartDataset } from 'chart.js';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'lib-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit, OnDestroy {
  dataSets: ChartDataset[] = [];
  labels: string[] = [];
  private subscription: Subscription | undefined;

  constructor(private store: Store, private adminService: AdminService) {
  }

  ngOnInit() {
    this.subscription = this.store.select(PoiSelectors.selectAllPoi).subscribe(pois => this.buildChart(pois));
    this.store.dispatch(PoiActions.initPoi());
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private buildChart(pois: PoiEntity[]) {
    this.labels = pois.map(poi => poi.name);
    this.dataSets = [{
      data: this.adminService.getStatics(pois),
      label: 'Latitude',
    }];
  }

}
