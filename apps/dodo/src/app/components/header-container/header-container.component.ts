import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models';
import { AppState, getAuthUser, headerSignOut } from '../../store';

@Component({
  selector: 'nmg-header-container',
  templateUrl: './header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent implements OnInit {
  public user$?: Observable<User | null>;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
  }

  public onSignOut(): void {
    this.store.dispatch(headerSignOut());
  }
}
