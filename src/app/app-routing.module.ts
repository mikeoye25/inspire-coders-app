import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const weatherforecastModule = () => import('./weatherforecast/weatherforecast-routing.module').then(x => x.WeatherforecastRoutingModule);
const generalPagesModule = () => import('./general-pages/general-pages-routing.module').then(x => x.GeneralPagesRoutingModule);

const routes: Routes = [
  { 
      path: '', 
      loadChildren: generalPagesModule
  },
  { 
      path: 'weatherforecast', 
      loadChildren: weatherforecastModule
  },
  { 
      path: '**', 
      redirectTo: '', 
      pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
