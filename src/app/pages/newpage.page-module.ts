import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewpagePage } from './newpage.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NewpagePage,
        }
      ])],
  	declarations: [NewpagePage],
  	providers: [],
  	exports: [] })
export class NewpagePageModule {
}
