import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { TodoList, MinimalTodoList } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  public getTodoLists(userId: string): Observable<TodoList[]> {
    return this.getTodoListCollection(userId).valueChanges({ idField: 'id' });
  }

  public addTodoList(
    userId: string,
    todoList: MinimalTodoList,
  ): Promise<DocumentReference> {
    const id = this.angularFirestore.createId();
    return this.getTodoListCollection(userId).add({
      ...todoList,
      id,
      user: userId,
    });
  }

  private getTodoListCollection(
    userId: string,
  ): AngularFirestoreCollection<TodoList> {
    return this.angularFirestore.collection<TodoList>(`todo-lists`, ref =>
      ref.where('user', '==', userId),
    );
  }
}
