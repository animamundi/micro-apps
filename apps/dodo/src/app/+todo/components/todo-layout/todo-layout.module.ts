import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddTodoContainerModule } from '../add-todo-container';
import { DoneTodoListContainerModule } from '../done-todo-list-container';
import { TodoListContainerModule } from '../todo-list-container';
import { TodoLayoutComponent } from './todo-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TodoListContainerModule,
    DoneTodoListContainerModule,
    AddTodoContainerModule,
  ],
  declarations: [TodoLayoutComponent],
  exports: [TodoLayoutComponent],
})
export class TodoLayoutModule {}
