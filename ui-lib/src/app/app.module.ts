import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine
} from "@ng-doc/app";
import {NG_DOC_ROUTING, provideNgDocContext} from "@ng-doc/generated";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UiControlsModule} from "ui-controls";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiControlsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(NG_DOC_ROUTING, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 70]
    }),
  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch()
    ),
    provideNgDocContext(),
    provideNgDocApp(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
