import { Component, Input } from '@angular/core';
import { faIcon } from '../../utils/icon.utils';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  @Input() caption = '';
  @Input() icon = '';
  protected readonly faIcon = faIcon;

}
