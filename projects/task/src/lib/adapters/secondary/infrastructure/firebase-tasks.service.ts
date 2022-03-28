import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';

@Injectable()
export class FirebaseTasksService implements AddsTaskDtoPort, GetsAllTaskDtoPort, RemovesTaskDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(task: Partial<TaskDTO>): void {
    this._client.collection('tasks').add(task);
  }

  getAll(criterion: Partial<TaskDTO>): Observable<TaskDTO[]> {
    return this._client.collection<TaskDTO>('tasks').valueChanges(({idField: 'id'})).pipe(map((data: TaskDTO[]) => filterByCriterion(data, criterion)));
  }

  remove(id: string): void {
    this._client.doc('tasks/'+id).delete();
  }
}
