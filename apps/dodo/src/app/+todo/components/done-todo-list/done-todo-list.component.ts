import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Todo } from '../../../models';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'nmg-done-todo-list',
  templateUrl: './done-todo-list.component.html',
  styleUrls: ['./done-todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneTodoListComponent implements OnChanges {
  @Input() public todos?: Todo[];

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

  public trackByTodoId({ id }: Todo): string {
    return id;
  }
}
