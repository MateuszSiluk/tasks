import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageAddTaskComponent } from './home-page-add-task.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomePageAddTaskComponent],
  providers: [],
  exports: [HomePageAddTaskComponent],
})
export class HomePageAddTaskComponentModule {}
