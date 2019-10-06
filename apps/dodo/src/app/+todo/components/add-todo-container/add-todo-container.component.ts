import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';

import { TodoFormContainerComponent } from '../todo-form-container';

@Component({
  selector: 'nmg-add-todo-container',
  templateUrl: './add-todo-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoContainerComponent {
  constructor(private readonly dialog: MatDialog) {}

  public addTodo(): void {
    this.dialog.open(TodoFormContainerComponent);
  }
}
