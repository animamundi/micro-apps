import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from '../../models';
import { AppState, getAuthUser, headerSignOut } from '../../store';

@Component({
  selector: 'nmg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public user$?: Observable<User | null>;

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
  }

  public onSignOut(): void {
    this.store.dispatch(headerSignOut());
  }
}
