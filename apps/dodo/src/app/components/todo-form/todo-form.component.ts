import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MinimalTodo } from '../../models';

@Component({
  selector: 'nmg-todo-form',
  templateUrl: './todo-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Output() public addTodo = new EventEmitter<MinimalTodo>();

  public todoFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });

  public onAddTodo(): void {
    if (this.todoFormGroup.invalid) {
      return;
    }

    this.addTodo.emit(this.todoFormGroup.value);
  }
}
