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
  signInFormSignInAnonymously,
  firebaseSignInAnonymouslySuccess,
} from '../actions';
import { AuthService, AnalyticsService, UserService } from '../../services';

@Injectable()
export class AuthEffects {
  public getAuthUser$ = createEffect(() =>
    this.authService.user$.pipe(
      map(user => firebaseGetAuthUserSuccess({ user })),
    ),
  );

  public setUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(firebaseGetAuthUserSuccess),
        tap(({ user }) => {
          if (user) {
            this.userService.setUser(user.uid, user);
          }
        }),
      ),
    { dispatch: false },
  );

  public setAnalyticsUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(firebaseGetAuthUserSuccess),
        tap(({ user }) => {
          if (user) {
            this.analyticsService.setUserId(user.uid);
          }
        }),
      ),
    { dispatch: false },
  );

  public signInWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInFormSignInWithGoogle),
      switchMap(() => this.authService.signInWithGoogle()),
      map(firebaseSignInWithGoogleSuccess),
    ),
  );

  public signInAnonymously$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInFormSignInAnonymously),
      switchMap(() => this.authService.signInAnonymously()),
      map(firebaseSignInAnonymouslySuccess),
    ),
  );

  public redirectToTodosPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          firebaseSignInWithGoogleSuccess,
          firebaseSignInAnonymouslySuccess,
        ),
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
    private readonly analyticsService: AnalyticsService,
    private readonly userService: UserService,
  ) {}
}
