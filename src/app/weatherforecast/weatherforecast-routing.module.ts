import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component';

const routes: Routes = [
  { path: '', component: WeatherforecastComponent },
  // { path: '', redirectTo: '/list', pathMatch: 'full' }, // default empty route
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WeatherforecastRoutingModule { }
