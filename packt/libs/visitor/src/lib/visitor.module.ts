import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@packt/poi';
import { PoiListComponent } from './poi-list/poi-list.component';
import { MatModule } from './mat.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    RouterModule.forChild([
      { path: '', component: VisitorComponent }
    ]),
    PoiModule,
    GoogleMapsModule
  ],
  declarations: [
    VisitorComponent,
    PoiListComponent
  ]
})
export class VisitorModule {
}
