import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [SharedModule, RouterOutlet, MatButtonModule, RouterLink],
  template: `
    <p>
      {{ 'home.text' | translate }}
    </p>
    <div class="row">
      <button routerLink="/" mat-raised-button>Home</button>
      <button routerLink="/service" mat-raised-button>Service</button>
      <button routerLink="/about" mat-raised-button>About Us</button>
    </div>
    <router-outlet />
  `,
  styles: `
    .row {
      display: flex;
      gap: 10px;
    }
  `,
})
export class HomeComponent {}
