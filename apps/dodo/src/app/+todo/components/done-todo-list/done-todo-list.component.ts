import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

import { Todo } from '../../../models';

@Component({
  selector: 'nmg-done-todo-list',
  templateUrl: './done-todo-list.component.html',
  styleUrls: ['./done-todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneTodoListComponent implements OnChanges {
  @Input() public todos?: Todo[];

  @Output() public readonly todoPrioritySet = new EventEmitter<Todo[]>();

  @ViewChild(MatExpansionPanel, { static: true })
  public expansionPanel?: MatExpansionPanel;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.todos) {
      if (
        (!this.todos || !this.todos.length) &&
        this.expansionPanel &&
        this.expansionPanel.expanded
      ) {
        this.expansionPanel.close();
      }
    }
  }

  public onTodoPrioritySet(todos: Todo[]): void {
    this.todoPrioritySet.emit(todos);
  }
}
