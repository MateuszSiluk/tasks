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
  ) {}

  onDeleteTaskClicked(id: string): void {
    this._removesTaskDto.remove(id);
  }

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(id: string): void {
    this.message = 'Confirmed!';
    this.onDeleteTaskClicked(id);
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
}
