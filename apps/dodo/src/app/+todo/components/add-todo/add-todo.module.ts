import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AddTodoComponent } from './add-todo.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [AddTodoComponent],
  exports: [AddTodoComponent],
})
export class AddTodoModule {}
