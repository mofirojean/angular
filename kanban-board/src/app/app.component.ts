import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ListType, Task, TaskDialogResult } from './task/task';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
import {
  CdkDragDrop,
  DragDropModule,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { KanbanService } from './kanban.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    TaskComponent,
    MatDialogModule,
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private store = inject(KanbanService);
  todo: Observable<Task[]> = this.store.getListCollection('todo');
  inProgress: Observable<Task[]> = this.store.getListCollection('inProgress');
  done: Observable<Task[]> = this.store.getListCollection('done');

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  editTask(list: ListType, task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true
      }
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
      if (!result) {
        return;
      }
      if (result.delete) {
        this.store.deleteDoc(list, task.id as string);
      } else {
        this.store.updateTask(list, result.task);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      return;
    }
    
    const item = event.previousContainer.data[event.previousIndex];
    if (item && item.id) {
      // creates a new task in the new list
      this.store.createTask(event.container.id as ListType, item);
      // deletes the task from the previous
      this.store.deleteDoc(event.previousContainer.id as ListType, item.id);
    }

    if (!event.container.data || !event.previousContainer.data) {
      return;
    }

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {}
      }
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        this.store.createTask('todo', result.task);
      })
  }
}
