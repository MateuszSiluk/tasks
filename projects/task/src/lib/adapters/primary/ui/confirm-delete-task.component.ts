import { BsModalRef } from 'ngx-bootstrap/modal';
import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject,
    TemplateRef,
  } from '@angular/core';
import {
  TASK_DTO_STORAGE,
  TaskDtoStoragePort,
} from '../../../application/ports/secondary/task-dto.storage-port';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { Observable, map } from 'rxjs';
import { RemovesTaskDtoPort, REMOVES_TASK_DTO } from '../../../application/ports/secondary/removes-task.dto-port';
import { RemovedTaskDtoStoragePort, REMOVED_TASK_DTO_STORAGE } from '../../../application/ports/secondary/removed-task-dto.storage-port';


@Component({
  selector: 'lib-confirm-delete-task',
  templateUrl: './confirm-delete-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteTaskComponent {
  constructor(
    @Inject(TASK_DTO_STORAGE)
    private _getTaskFromMemoryStorage: TaskDtoStoragePort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    public modalRef: BsModalRef, @Inject(REMOVED_TASK_DTO_STORAGE) private _removedTaskDtoStorage: RemovedTaskDtoStoragePort
  ) {}

  task$: Observable<TaskDTO> = this._getTaskFromMemoryStorage.asObservable();

    async confirm(id: string): Promise<void> {
    this._removesTaskDto.remove(id);
    this._removedTaskDtoStorage.next({idRemoved: id});
    this.modalRef?.hide();
    await delay(5000); //delay to remove allert
    this._removedTaskDtoStorage.next(undefined);
  }

  decline(): void {
    this.modalRef?.hide();
  }

 
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}