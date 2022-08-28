import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'facilitator',
    loadChildren: () => import('./facilitator/facilitator.module').then(m => m.FacilitatorModule)
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
