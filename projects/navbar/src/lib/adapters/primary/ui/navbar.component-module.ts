import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [NavbarComponent],
  	providers: [],
  	exports: [NavbarComponent] })
export class NavbarComponentModule {
}
