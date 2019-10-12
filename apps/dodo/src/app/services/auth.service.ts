import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User | null>;

  constructor(private readonly angularFireAuth: AngularFireAuth) {
    this.user$ = this.angularFireAuth.user.pipe(
      map(user => {
        if (!user) {
          return null;
        }

        return {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid,
        };
      }),
    );
  }

  public signOut(): Promise<void> {
    return this.getAuth().signOut();
  }

  public signInWithGoogle(): Promise<auth.UserCredential> {
    return this.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public signInAnonymously() {
    return this.getAuth().signInAnonymously();
  }

  private signInWithPopup(
    provider: auth.AuthProvider,
  ): Promise<auth.UserCredential> {
    return this.getAuth().signInWithPopup(provider);
  }

  private getAuth(): auth.Auth {
    return this.angularFireAuth.auth;
  }
}
