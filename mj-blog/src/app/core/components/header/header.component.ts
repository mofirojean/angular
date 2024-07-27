import { Component } from '@angular/core';
import { faIcon } from '../../../utils/icons.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent {
  protected readonly faIcon = faIcon;
}
