import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListContainerModule } from '../todo-list-container';
import { AddTodoContainerModule } from '../add-todo-container';
import { TodoLayoutComponent } from './todo-layout.component';

@NgModule({
  imports: [CommonModule, TodoListContainerModule, AddTodoContainerModule],
  declarations: [TodoLayoutComponent],
  exports: [TodoLayoutComponent],
})
export class TodoLayoutModule {}
