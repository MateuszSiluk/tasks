import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllTasksComponent } from './show-all-tasks.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowAllTasksComponent],
  providers: [],
  exports: [ShowAllTasksComponent],
})
export class ShowAllTasksComponentModule {}
