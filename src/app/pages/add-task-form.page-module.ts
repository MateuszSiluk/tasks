import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskFormPage } from './add-task-form.page';
import { AddTaskFormComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task-form.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { ShowAllTasksComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/show-all-tasks.component-module';
import { NavbarComponentModule } from '../../../projects/navbar/src/lib/adapters/primary/ui/navbar.component-module';
import { TodayDateComponentModule } from '../../../projects/dates/src/lib/adapters/primary/ui/today-date.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddTaskFormPage,
      },
    ]),
    AddTaskFormComponentModule,
    FirebaseTasksServiceModule,
    ShowAllTasksComponentModule,
    NavbarComponentModule,
    TodayDateComponentModule
  ],
  declarations: [AddTaskFormPage],
  providers: [],
  exports: [],
})
export class AddTaskFormPageModule {}
