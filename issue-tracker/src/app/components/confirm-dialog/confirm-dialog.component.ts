import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: ``
})
export class ConfirmDialogComponent {
  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  agree() {
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.issueNo = null;
  }
}
