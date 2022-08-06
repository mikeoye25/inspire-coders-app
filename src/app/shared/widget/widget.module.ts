import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsWidget1Component } from './statistics-widget1/statistics-widget1.component';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StatisticsWidget1Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgApexchartsModule,
    NgbDropdownModule
  ],
  exports: [
    StatisticsWidget1Component
  ]
})
export class WidgetModule { }
