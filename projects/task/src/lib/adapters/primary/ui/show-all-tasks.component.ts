import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../../../application/ports/secondary/removes-task.dto-port';
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from '../../../application/ports/secondary/sets-task.dto-port';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  TASK_DTO_STORAGE,
  TaskDtoStoragePort,
} from '../../../application/ports/secondary/task-dto.storage-port';
import { ConfirmDeleteTaskComponent } from './confirm-delete-task.component';

@Component({
  selector: 'lib-show-all-tasks',
  templateUrl: './show-all-tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowAllTasksComponent {
  modalRef?: BsModalRef;
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  message?: string;
  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    private modalService: BsModalService,
    @Inject(TASK_DTO_STORAGE) private _setTaskToInMemoryStorage: TaskDtoStoragePort
  ) {}
  

  onCheckedCheckboxed(task: any): void {
    if (task.isChecked === false) {
      this._setsTaskDto.set({
        id: task.id,
        isChecked: true,
      });
    } else {
      this._setsTaskDto.set({
        id: task.id,
        isChecked: false,
      });
    }
  }

  onDeleteTaskClicked(task: Partial<TaskDTO>) {
    this.modalRef = this.modalService.show(ConfirmDeleteTaskComponent, { class: 'modal-sm' });
    this._setTaskToInMemoryStorage.next(task);
  }

  
}
