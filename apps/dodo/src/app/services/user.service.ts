import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  public setUser(userId: string, user: User): Promise<void> {
    return this.getUserCollection()
      .doc<User>(userId)
      .set(user);
  }

  private getUserCollection(): AngularFirestoreCollection<User> {
    return this.angularFirestore.collection<User>('users');
  }
}
