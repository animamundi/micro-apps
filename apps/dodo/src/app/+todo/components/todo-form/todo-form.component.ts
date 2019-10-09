import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MinimalTodo } from '../../../models';
import { NoErrorStateMatcher } from '../../../utils';
import { MatInput } from '@angular/material';

@Component({
  selector: 'nmg-todo-form',
  templateUrl: './todo-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Output() public addTodo = new EventEmitter<MinimalTodo>();

  @ViewChild('titleInput', { static: true, read: MatInput })
  public titleInput?: MatInput;

  public todoFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  public errorStateMatcher = new NoErrorStateMatcher();

  public onAddTodo(): void {
    if (this.todoFormGroup.invalid) {
      return;
    }

    this.addTodo.emit(this.todoFormGroup.value);
    this.todoFormGroup.reset();

    if (this.titleInput) {
      this.titleInput.focus();
    }
  }
}
