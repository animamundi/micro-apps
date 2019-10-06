import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import {
  firebaseGetAuthUserSuccess,
  headerSignOut,
  firebaseSignOutSuccess,
  signInFormSignInWithGoogle,
  firebaseSignInWithGoogleSuccess,
} from '../actions';
import { AuthService } from '../../services';

@Injectable()
export class AuthEffects {
  public getAuthUser$ = createEffect(() =>
    this.authService.user$.pipe(
      map(user => firebaseGetAuthUserSuccess({ user })),
    ),
  );

  public signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInFormSignInWithGoogle),
      switchMap(() => this.authService.signInWithGoogle()),
      map(firebaseSignInWithGoogleSuccess),
    ),
  );

  public redirectToTodosPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(firebaseSignInWithGoogleSuccess),
        tap(() => {
          this.routerService.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  public signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(headerSignOut),
      switchMap(() => this.authService.signOut()),
      map(() => firebaseSignOutSuccess()),
    ),
  );

  public redirectToAuthPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(firebaseSignOutSuccess),
        tap(() => {
          this.routerService.navigateByUrl('/auth');
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly routerService: Router,
  ) {}
}
