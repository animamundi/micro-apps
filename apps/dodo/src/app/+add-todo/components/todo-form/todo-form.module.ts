import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
})
export class TodoFormModule {}
