import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoneTodoListModule } from '../done-todo-list/done-todo-list.module';
import { DoneTodoListContainerComponent } from './done-todo-list-container.component';

@NgModule({
  imports: [CommonModule, DoneTodoListModule],
  declarations: [DoneTodoListContainerComponent],
  exports: [DoneTodoListContainerComponent],
})
export class DoneTodoListContainerModule {}
