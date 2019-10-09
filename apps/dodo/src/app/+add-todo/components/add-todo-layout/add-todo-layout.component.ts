import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';

import { TodoFormContainerComponent } from '../todo-form-container';
import { BaseComponent } from '@nmg/ui/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'nmg-add-todo-layout',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoLayoutComponent extends BaseComponent implements OnInit {
  constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router,
  ) {
    super();
  }

  public ngOnInit(): void {
    const dialogRef = this.dialog.open(TodoFormContainerComponent);

    this.safeSubscribe(dialogRef.afterClosed()).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
