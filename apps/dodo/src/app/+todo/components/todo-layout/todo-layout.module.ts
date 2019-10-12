import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddTodoModule } from '../add-todo';
import { TodoListContainerModule } from '../todo-list-container';
import { DoneTodoListContainerModule } from '../done-todo-list-container';
import { TodoListsContainerModule } from '../todo-lists-container';
import { TodoLayoutComponent } from './todo-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TodoListContainerModule,
    DoneTodoListContainerModule,
    AddTodoModule,
    TodoListsContainerModule,
  ],
  declarations: [TodoLayoutComponent],
  exports: [TodoLayoutComponent],
})
export class TodoLayoutModule {}
