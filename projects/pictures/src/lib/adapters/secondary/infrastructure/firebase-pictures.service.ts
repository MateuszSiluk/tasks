import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllPictureDtoPort } from '../../../application/ports/secondary/gets-all-picture.dto-port';
import { PictureDTO } from '../../../application/ports/secondary/picture.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebasePicturesService implements GetsAllPictureDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<PictureDTO>): Observable<PictureDTO[]> {
    return this._client
      .collection<PictureDTO>('image-lists')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: PictureDTO[]) => filterByCriterion(data, criterion)));
  }
}
