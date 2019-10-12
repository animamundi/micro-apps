import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListsModule } from '../todo-lists/todo-lists.module';
import { TodoListsContainerComponent } from './todo-lists-container.component';

@NgModule({
  imports: [CommonModule, TodoListsModule],
  declarations: [TodoListsContainerComponent],
  exports: [TodoListsContainerComponent],
})
export class TodoListsContainerModule {}
