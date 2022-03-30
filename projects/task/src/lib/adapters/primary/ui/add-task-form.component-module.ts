import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [AddTaskFormComponent],
  providers: [],
  exports: [AddTaskFormComponent],
})
export class AddTaskFormComponentModule {}
