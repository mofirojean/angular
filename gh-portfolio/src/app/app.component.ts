import { Component } from '@angular/core';
import { faBrand, faIcon } from './utils/icon.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gh-portfolio';
  username = 'mofirojean';

  protected readonly faIcon = faIcon;
  protected readonly faBrand = faBrand;
}
