import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitatorAddComponent } from './facilitator-add/facilitator-add.component';
import { FacilitatorComponent } from './facilitator/facilitator.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitatorComponent
  },
  {
    path: 'add',
    component: FacilitatorAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitatorRoutingModule { }
