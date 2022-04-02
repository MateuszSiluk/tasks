import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOfTasksPage } from './list-of-tasks.page';
import { TodayDateComponentModule } from '../../../projects/dates/src/lib/adapters/primary/ui/today-date.component-module';
import { ShowAllTasksComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/show-all-tasks.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { HomePageAddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/home-page-add-task.component-module';
import { InMemoryRemovedTaskStorageModule, InMemoryTasksStorageModule } from '@task';
import { FirebaseDateServiceModule } from '../../../projects/dates/src/lib/adapters/secondary/infrastructure/firebase-date.service-module';
import { AlertComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/alert.component-module';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule, AlertModule.forRoot(),
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
    InMemoryTasksStorageModule,
    FirebaseDateServiceModule,
    AlertComponentModule,
    InMemoryRemovedTaskStorageModule
  ],
  declarations: [ListOfTasksPage],
  providers: [],
  exports: [],
})
export class ListOfTasksPageModule {}
