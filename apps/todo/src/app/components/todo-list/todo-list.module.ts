import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatListModule,
  MatDividerModule,
} from '@angular/material';

import { TodoListComponent } from './todo-list.component';
import { TodoContainerModule } from '../todo-container';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    TodoContainerModule,
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoListModule {}
