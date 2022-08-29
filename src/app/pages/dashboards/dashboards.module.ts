import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { WidgetModule } from '../../shared/widget/widget.module';



@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgbDropdownModule,
    WidgetModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
