import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({ imports: [CommonModule, AlertModule.forRoot()],
  	declarations: [AlertComponent],
  	providers: [],
  	exports: [AlertComponent] })
export class AlertComponentModule {
}
