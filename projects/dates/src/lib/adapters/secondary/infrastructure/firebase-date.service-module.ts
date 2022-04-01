import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseDateService } from './firebase-date.service';
import { GETS_ALL_DATE_DTO } from '../../../application/ports/secondary/gets-all-date.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseDateService, { provide: GETS_ALL_DATE_DTO, useExisting: FirebaseDateService }],
  	exports: [] })
export class FirebaseDateServiceModule {
}
