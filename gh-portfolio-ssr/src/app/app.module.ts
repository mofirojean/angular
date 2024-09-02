import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { OrganizationComponent } from './components/organization/organization.component';
import { PanelComponent } from './components/panel/panel.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    PanelComponent,
    PersonalInfoComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
