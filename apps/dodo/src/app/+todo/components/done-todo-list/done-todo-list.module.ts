import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';

import { TodoDragListModule } from '../todo-drag-list';
import { DoneTodoListComponent } from './done-todo-list.component';

@NgModule({
  imports: [CommonModule, MatExpansionModule, TodoDragListModule],
  declarations: [DoneTodoListComponent],
  exports: [DoneTodoListComponent],
})
export class DoneTodoListModule {}
