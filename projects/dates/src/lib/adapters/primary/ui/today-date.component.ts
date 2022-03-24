import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-today-date',
  templateUrl: './today-date.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayDateComponent {

  dateTime$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
