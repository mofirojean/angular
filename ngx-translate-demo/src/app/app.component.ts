import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule, MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  TranslateService,
  TranslateDirective,
  TranslatePipe,
  TranslateModule,
} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TranslatePipe,
    TranslateModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngx-translate-demo';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage(event: MatSlideToggleChange) {
    this.translate.use(this.translate.currentLang == 'en' ? 'fr' : 'en')
  }
}
