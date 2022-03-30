import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllTasksComponent } from './show-all-tasks.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [CommonModule,
    BsDropdownModule.forRoot()],
  declarations: [ShowAllTasksComponent],
  providers: [],
  exports: [ShowAllTasksComponent],
})
export class ShowAllTasksComponentModule {}
