import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast/weatherforecast.component';


const weatherforecastModule = () => import('./weatherforecast/weatherforecast-routing.module').then(x => x.WeatherforecastRoutingModule);

const routes: Routes = [
  { 
      path: 'weatherforecast', 
      loadChildren: weatherforecastModule
  },
  { path: '', redirectTo: 'weatherforecast', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
