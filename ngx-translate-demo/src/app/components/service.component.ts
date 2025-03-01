import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-service',
  imports: [SharedModule],
  template: `
    <p>
      {{ 'service.text' | translate }}
    </p>
  `,
  styles: ``
})
export class ServiceComponent {

}
