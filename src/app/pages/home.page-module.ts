import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { TodayDateComponentModule } from '../../../projects/dates/src/lib/adapters/primary/ui/today-date.component-module';
import { ThreePicturesInARowComponentModule } from '../../../projects/pictures/src/lib/adapters/primary/ui/three-pictures-in-arow.component-module';

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
    ThreePicturesInARowComponentModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
