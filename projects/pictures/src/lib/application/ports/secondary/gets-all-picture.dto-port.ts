import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureDTO } from './picture.dto';

export const GETS_ALL_PICTURE_DTO = new InjectionToken<GetsAllPictureDtoPort>('GETS_ALL_PICTURE_DTO');

export interface GetsAllPictureDtoPort {
  getAll(criterion?: Partial<PictureDTO>): Observable<PictureDTO[]>;
}
