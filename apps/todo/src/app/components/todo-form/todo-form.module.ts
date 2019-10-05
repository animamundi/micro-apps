import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
})
export class TodoFormModule {}
