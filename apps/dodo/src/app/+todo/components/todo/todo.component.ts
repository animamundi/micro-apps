import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

import { BaseComponent } from '@nmg/ui/utils';
import { Todo } from '../../../models';

@Component({
  selector: 'nmg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent extends BaseComponent implements OnInit, OnChanges {
  @Input() public readonly todo?: Todo;

  @Output() public readonly delete = new EventEmitter<Todo>();

  @Output() public readonly doneChange = new EventEmitter<Todo>();

  public doneFormControl = new FormControl(false);

  public ngOnInit(): void {
    this.safeSubscribe(this.doneFormControl.valueChanges)
      .pipe(distinctUntilChanged())
      .subscribe((done: boolean) => {
        this.doneChange.emit(Object.assign({}, this.todo, { done }));
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.todo && this.todo) {
      this.doneFormControl.setValue(this.todo.done);
    }
  }

  public onDeleteClicked(): void {
    this.delete.emit(this.todo);
  }
}
