import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RemovedTaskDTO } from './removed-task.dto';

export const REMOVED_TASK_DTO_STORAGE = new InjectionToken<RemovedTaskDtoStoragePort>('REMOVED_TASK_DTO_STORAGE');

export interface RemovedTaskDtoStoragePort {
  next(item: Partial<RemovedTaskDTO | undefined>): void;
  asObservable(): Observable<RemovedTaskDTO>;
}
