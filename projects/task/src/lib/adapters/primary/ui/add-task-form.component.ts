import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-task-form',
  templateUrl: './add-task-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskFormComponent {
  readonly formTask: FormGroup = new FormGroup({ text: new FormControl() });

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort, private router: Router) {}

  onAddtaskClicked(formTask: FormGroup): void {
    this._addsTaskDto.add({ 
        text: this.formTask.get('text')?.value,
        isChecked: false
    });
    this.formTask.reset();
    this.router.navigate(['all-tasks']);
  }
}
