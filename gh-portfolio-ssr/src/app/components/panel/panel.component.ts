import {Component, Input} from '@angular/core';
import {faIcon} from "../../utils/icon.utils";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: ``
})
export class PanelComponent {
  @Input() caption = '';
  @Input() icon = '';
  protected readonly faIcon = faIcon;
}
