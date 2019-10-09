import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material';

import { TodoContainerModule } from '../todo-container';
import { TodoDragListComponent } from './todo-drag-list.component';

@NgModule({
  imports: [CommonModule, DragDropModule, MatIconModule, TodoContainerModule],
  declarations: [TodoDragListComponent],
  exports: [TodoDragListComponent],
})
export class TodoDragListModule {}
