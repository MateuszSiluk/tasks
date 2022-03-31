import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllTasksComponent } from './show-all-tasks.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [CommonModule, ModalModule.forRoot(),
    BsDropdownModule.forRoot()],
  declarations: [ShowAllTasksComponent],
  providers: [],
  exports: [ShowAllTasksComponent],
})
export class ShowAllTasksComponentModule {}
