import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter([
      {
        path: "chat",
        component: ChatWindowComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/chat"
      }
    ])
  ]
};
