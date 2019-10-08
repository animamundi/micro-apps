import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatExpansionModule,
  MatListModule,
  MatDividerModule,
} from '@angular/material';

import { TodoContainerModule } from '../todo-container';
import { DoneTodoListComponent } from './done-todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    TodoContainerModule,
  ],
  declarations: [DoneTodoListComponent],
  exports: [DoneTodoListComponent],
})
export class DoneTodoListModule {}
