import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DateDTO } from './date.dto';

export const GETS_ALL_DATE_DTO = new InjectionToken<GetsAllDateDtoPort>(
  'GETS_ALL_DATE_DTO'
);

export interface GetsAllDateDtoPort {
  getAll(): Observable<DateDTO>;
}
