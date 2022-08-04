import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';

const weatherforecastModule = () => import('./weatherforecast/weatherforecast-routing.module').then(x => x.WeatherforecastRoutingModule);
const generalPagesModule = () => import('./general-pages/general-pages-routing.module').then(x => x.GeneralPagesRoutingModule);

const routes: Routes = [
  { 
      path: '', 
      loadChildren: generalPagesModule
  },
  {
    path: 'pages',
    component: LayoutContainerComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
      // {
      //   path: 'apps',
      //   loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
      // }
    ]
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
