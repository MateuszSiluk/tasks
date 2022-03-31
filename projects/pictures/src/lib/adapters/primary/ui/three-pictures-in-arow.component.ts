import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { of, Observable } from 'rxjs';
import { PictureDTO } from '../../../application/ports/secondary/picture.dto';
import {
  GETS_ALL_PICTURE_DTO,
  GetsAllPictureDtoPort,
} from '../../../application/ports/secondary/gets-all-picture.dto-port';

@Component({
  selector: 'lib-three-pictures-in-arow',
  templateUrl: './three-pictures-in-arow.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreePicturesInARowComponent {
  pictures$: Observable<PictureDTO[]> = this._getsAllPictureDto.getAll();

  constructor(
    @Inject(GETS_ALL_PICTURE_DTO)
    private _getsAllPictureDto: GetsAllPictureDtoPort
  ) {}
}
