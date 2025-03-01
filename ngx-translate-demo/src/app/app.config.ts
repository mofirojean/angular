import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ServiceComponent } from './components/service.component';
import { AboutUsComponent } from './components/about-us.component';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) => 
  new TranslateHttpLoader(http, './i18n/', '.json')

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: "service",
            component: ServiceComponent
          },
          {
            path: "about",
            component: AboutUsComponent
          }
        ]
      }
    ]),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
};
