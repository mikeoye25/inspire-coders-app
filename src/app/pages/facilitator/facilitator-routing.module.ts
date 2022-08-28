import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitatorComponent } from './facilitator/facilitator.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitatorRoutingModule { }
