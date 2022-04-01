import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllDateDtoPort } from '../../../application/ports/secondary/gets-all-date.dto-port';
import { DateDTO } from '../../../application/ports/secondary/date.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseDateService implements GetsAllDateDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<DateDTO> {
    return of({
      dateTime:  new Date()
    });
}
}
