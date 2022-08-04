import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalLayoutComponent } from './horizontal-layout.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HorizontalLayoutComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HorizontalLayoutComponent
  ]
})
export class HorizontalLayoutModule { }
