import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

import { TodoListsComponent } from './todo-lists.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [TodoListsComponent],
  exports: [TodoListsComponent],
})
export class TodoListsModule {}
