import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListModule } from '../todo-list';
import { TodoListContainerComponent } from './todo-list-container.component';

@NgModule({
  imports: [CommonModule, TodoListModule],
  declarations: [TodoListContainerComponent],
  exports: [TodoListContainerComponent],
})
export class TodoListContainerModule {}
