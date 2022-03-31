import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePicturesService } from './firebase-pictures.service';
import { GETS_ALL_PICTURE_DTO } from '../../../application/ports/secondary/gets-all-picture.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebasePicturesService,
    { provide: GETS_ALL_PICTURE_DTO, useExisting: FirebasePicturesService },
  ],
  exports: [],
})
export class FirebasePicturesServiceModule {}
