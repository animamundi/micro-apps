import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog } from '@angular/material';

import { BaseComponent } from '@nmg/ui/utils';
import { UpdateAvailableComponent } from './components';

@Component({
  selector: 'nmg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(
    private readonly swUpdate: SwUpdate,
    private readonly dialog: MatDialog,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.safeSubscribe(this.swUpdate.available).subscribe(() => {
      this.dialog.open(UpdateAvailableComponent);
    });
  }
}
