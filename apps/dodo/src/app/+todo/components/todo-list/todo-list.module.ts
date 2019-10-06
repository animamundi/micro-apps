import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatTabsModule,
} from '@angular/material';

import { TodoContainerModule } from '../todo-container';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    TodoContainerModule,
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoListModule {}
