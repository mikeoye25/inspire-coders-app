import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalLayoutComponent } from './vertical-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    VerticalLayoutComponent
  ]
})
export class VerticalLayoutModule { }
