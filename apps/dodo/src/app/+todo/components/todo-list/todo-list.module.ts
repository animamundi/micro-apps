import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TodoDragListModule } from '../todo-drag-list';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [CommonModule, DragDropModule, MatCardModule, TodoDragListModule],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoListModule {}
