import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'capture',
    pathMatch: 'full',
  },
  {
    path: 'capture',
    loadComponent: () => import('./capture/capture.page').then( m => m.CapturePage)
  },
];
