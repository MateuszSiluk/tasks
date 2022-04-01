import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { TaskDtoStoragePort } from '../../../application/ports/secondary/task-dto.storage-port';

@Injectable()
export class InMemoryTasksStorage
  extends ReplaySubject<TaskDTO>
  implements  TaskDtoStoragePort {}
