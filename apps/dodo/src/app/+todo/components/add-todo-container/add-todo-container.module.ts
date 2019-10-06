import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoFormContainerModule } from '../todo-form-container';
import { AddTodoModule } from '../add-todo';
import { AddTodoContainerComponent } from './add-todo-container.component';

@NgModule({
  imports: [CommonModule, AddTodoModule, TodoFormContainerModule],
  declarations: [AddTodoContainerComponent],
  exports: [AddTodoContainerComponent],
})
export class AddTodoContainerModule {}
