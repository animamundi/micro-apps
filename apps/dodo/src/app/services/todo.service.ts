import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Todo, CreateTodoPayload } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  public getTodos(userId: string): Observable<Todo[]> {
    return this.getTodoCollection(userId).valueChanges({ idField: 'id' });
  }

  public addTodo(
    userId: string,
    todo: CreateTodoPayload,
  ): Promise<DocumentReference> {
    const id = this.angularFirestore.createId();
    return this.getTodoCollection(userId).add({ ...todo, id });
  }

  public updateTodo(userId: string, todo: Todo): Promise<void> {
    return this.getTodoCollection(userId)
      .doc<Todo>(todo.id)
      .update(todo);
  }

  public updateManyTodos(userId: string, todos: Todo[]): Promise<void> {
    const collection = this.getTodoCollection(userId);
    const batch = this.angularFirestore.firestore.batch();

    todos.forEach(todo => {
      const docRef = collection.doc(todo.id).ref;
      batch.update(docRef, todo);
    });

    return batch.commit();
  }

  public deleteTodo(userId: string, todo: Todo): Promise<void> {
    return this.getTodoCollection(userId)
      .doc<Todo>(todo.id)
      .delete();
  }

  private getTodoCollection(userId: string): AngularFirestoreCollection<Todo> {
    return this.angularFirestore.collection<Todo>(`users/${userId}/todos`);
  }
}
