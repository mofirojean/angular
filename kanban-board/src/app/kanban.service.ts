import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { ListType, Task } from './task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Manage and access firebase for the various
 */
export class KanbanService {
  private db: Firestore = inject(Firestore);

  getListCollection(list: ListType): Observable<Task[]> {
    return collectionData(collection(this.db, list), { idField: 'id'}) as Observable<Task[]>
  }

  async updateTask(list: ListType, task: Task): Promise<void> {
    if (!task.id) {
      throw new Error('Task ID is undefined');
    }
    let taskDocRef = doc(this.db, list, task.id);
    await updateDoc(taskDocRef, { ...task }) 
  }

  async createTask(list: ListType, task: Task): Promise<void> {
    let taskCollection = collection(this.db, list);
    await addDoc(taskCollection, { ...task });
  }

  async deleteDoc(list: ListType, id: string) {
    await deleteDoc(doc(this.db, list, id))
  }
}
