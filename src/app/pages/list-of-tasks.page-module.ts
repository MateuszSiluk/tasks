import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOfTasksPage } from './list-of-tasks.page';
import { TodayDateComponentModule } from '../../../projects/dates/src/lib/adapters/primary/ui/today-date.component-module';
import { ShowAllTasksComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/show-all-tasks.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { HomePageAddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/home-page-add-task.component-module';
import { InMemoryTasksStorageModule } from '@task';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListOfTasksPage,
      },
    ]),
    TodayDateComponentModule,
    ShowAllTasksComponentModule,
    FirebaseTasksServiceModule,
    HomePageAddTaskComponentModule,
    InMemoryTasksStorageModule
  ],
  declarations: [ListOfTasksPage],
  providers: [],
  exports: [],
})
export class ListOfTasksPageModule {}
