import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { TodayDateComponentModule } from '../../../projects/dates/src/lib/adapters/primary/ui/today-date.component-module';
import { ThreePicturesInARowComponentModule } from '../../../projects/pictures/src/lib/adapters/primary/ui/three-pictures-in-arow.component-module';
import { HomePageAddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/home-page-add-task.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    TodayDateComponentModule,
    ThreePicturesInARowComponentModule,
    HomePageAddTaskComponentModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
