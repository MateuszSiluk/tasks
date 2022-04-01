import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from './task.dto';

export const TASK_DTO_STORAGE = new InjectionToken<TaskDtoStoragePort>('TASK_DTO_STORAGE');

export interface TaskDtoStoragePort {
  next(item: Partial<TaskDTO | undefined>): void;
  asObservable(): Observable<TaskDTO>;
}
