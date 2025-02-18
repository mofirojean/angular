import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { provideMarkdown } from 'ngx-markdown';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter([
      {
        path: "chat",
        component: ChatComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/chat"
      }
    ]),
    provideMarkdown()
  ]
};
