import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from "@angular/elements";
import { AppComponent } from './app.component';
import {CopyButtonComponent, UiControlsModule} from "ui-controls";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const el = createCustomElement(CopyButtonComponent, { injector: this.injector });
    customElements.define('app-root', el);
  }
}
