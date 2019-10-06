import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Todo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly angularFirestore: AngularFirestore) {
    this.angularFirestore.collection('todos');
  }

  public getTodos(userId: string): Observable<Todo[]> {
    return this.getTodoCollection(userId).valueChanges();
  }

  public addTodo(userId: string, todo: Todo): Promise<DocumentReference> {
    return this.getTodoCollection(userId).add(todo);
  }

  private getTodoCollection(userId: string): AngularFirestoreCollection<Todo> {
    return this.angularFirestore.collection<Todo>(`todos/${userId}`);
  }
}
