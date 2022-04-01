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
    public modalRef?: BsModalRef
  ) {}

  task$: Observable<TaskDTO> = this._getTaskFromMemoryStorage.asObservable();

  confirm(id: string): void {
    this._removesTaskDto.remove(id);
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }
}