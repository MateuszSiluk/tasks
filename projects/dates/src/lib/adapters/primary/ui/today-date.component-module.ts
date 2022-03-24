import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayDateComponent } from './today-date.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodayDateComponent],
  providers: [],
  exports: [TodayDateComponent],
})
export class TodayDateComponentModule {}
