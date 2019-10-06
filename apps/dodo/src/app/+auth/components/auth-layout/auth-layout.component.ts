import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  AppState,
  signInFormSignInWithGoogle,
  signInFormSignInAnonymously,
} from '../../../store';

@Component({
  selector: 'nmg-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  constructor(private readonly store: Store<AppState>) {}

  public signInWithGoogle(): void {
    this.store.dispatch(signInFormSignInWithGoogle());
  }

  public signInAnonymously(): void {
    this.store.dispatch(signInFormSignInAnonymously());
  }
}
