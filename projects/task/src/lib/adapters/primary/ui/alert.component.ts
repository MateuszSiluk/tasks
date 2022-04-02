import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  REMOVED_TASK_DTO_STORAGE,
  RemovedTaskDtoStoragePort,
} from '../../../application/ports/secondary/removed-task-dto.storage-port';
import { RemovedTaskDTO } from '../../../application/ports/secondary/removed-task.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  removedTask$: Observable<RemovedTaskDTO> = this._removedTaskDtoStorage.asObservable();

  constructor(
    @Inject(REMOVED_TASK_DTO_STORAGE)
    private _removedTaskDtoStorage: RemovedTaskDtoStoragePort
  ) {}
}
