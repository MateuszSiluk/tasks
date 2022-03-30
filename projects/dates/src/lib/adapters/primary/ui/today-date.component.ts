import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs';
import { DateDTO } from '../../../application/ports/secondary/date.dto';

@Component({
  selector: 'lib-today-date',
  templateUrl: './today-date.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayDateComponent {

  date$ : Observable<DateDTO> = of(
    {
      dateTime : Date.now().toString()
    }
  );
}
