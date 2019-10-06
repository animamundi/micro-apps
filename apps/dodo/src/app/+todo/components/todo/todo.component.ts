import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnChanges {
  @Input() public readonly todo?: Todo;

  @Output() public readonly delete = new EventEmitter<Todo>();

  @Output() public readonly doneChange = new EventEmitter<Todo>();

  public doneFormControl = new FormControl(false);

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.todo && this.todo) {
      this.doneFormControl.setValue(this.todo.done);
    }
  }

  public onDeleteClicked(): void {
    this.delete.emit(this.todo);
  }

  public onCheckboxChange() {
    const todo = {
      ...this.todo,
      done: this.doneFormControl.value,
    } as Todo;

    this.doneChange.emit(todo);
  }
}
