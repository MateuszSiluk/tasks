import { map, of } from 'rxjs';
import { Observable } from 'rxjs';
import { DateDTO } from '../../../application/ports/secondary/date.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_DATE_DTO, GetsAllDateDtoPort } from '../../../application/ports/secondary/gets-all-date.dto-port';

@Component({
  selector: 'lib-today-date',
  templateUrl: './today-date.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayDateComponent {
  date$: Observable<DateDTO> = this._getsAllDateDto.getAll();

  constructor(@Inject(GETS_ALL_DATE_DTO) private _getsAllDateDto: GetsAllDateDtoPort) {
  }
}
