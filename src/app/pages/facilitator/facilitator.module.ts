import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitatorComponent } from './facilitator/facilitator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedTableModule } from '../../shared/advanced-table/advanced-table.module';
import { FacilitatorRoutingModule } from './facilitator-routing.module';
import { FacilitatorAddComponent } from './facilitator-add/facilitator-add.component';



@NgModule({
  declarations: [
    FacilitatorComponent,
    FacilitatorAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AdvancedTableModule,
    FacilitatorRoutingModule
  ],
  exports: [
    FacilitatorComponent,
    FacilitatorAddComponent
  ]
})
export class FacilitatorModule { }
