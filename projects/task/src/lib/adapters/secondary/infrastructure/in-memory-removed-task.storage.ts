import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RemovedTaskDTO } from '../../../application/ports/secondary/removed-task.dto';
import { RemovedTaskDtoStoragePort } from '../../../application/ports/secondary/removed-task-dto.storage-port';

@Injectable()
export class InMemoryRemovedTaskStorage
  extends ReplaySubject<RemovedTaskDTO>
  implements RemovedTaskDtoStoragePort, RemovedTaskDtoStoragePort {}
