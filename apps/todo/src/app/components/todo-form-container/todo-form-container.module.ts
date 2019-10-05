import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoFormModule } from '../todo-form';
import { TodoFormContainerComponent } from './todo-form-container.component';

@NgModule({
  imports: [CommonModule, TodoFormModule],
  declarations: [TodoFormContainerComponent],
  exports: [TodoFormContainerComponent],
})
export class TodoFormContainerModule {}
