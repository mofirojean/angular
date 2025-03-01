import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-about-us',
  imports: [SharedModule],
  template: `
    <p>
      {{ 'about.text' | translate }}
    </p>
  `,
  styles: ``
})
export class AboutUsComponent {

}
