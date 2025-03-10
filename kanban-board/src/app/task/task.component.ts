import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Task } from './task';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-task',
  imports: [MatCardModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
