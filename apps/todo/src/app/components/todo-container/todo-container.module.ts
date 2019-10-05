import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoModule } from '../todo';
import { TodoContainerComponent } from './todo-container.component';

@NgModule({
  imports: [CommonModule, TodoModule],
  declarations: [TodoContainerComponent],
  exports: [TodoContainerComponent],
})
export class TodoContainerModule {}
