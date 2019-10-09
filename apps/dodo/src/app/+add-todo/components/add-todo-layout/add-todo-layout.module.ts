import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { TodoFormContainerModule } from '../todo-form-container';
import { AddTodoLayoutComponent } from './add-todo-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    TodoFormContainerModule,
  ],
  declarations: [AddTodoLayoutComponent],
  exports: [AddTodoLayoutComponent],
})
export class AddTodoLayoutModule {}
