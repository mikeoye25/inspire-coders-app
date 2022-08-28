import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitatorComponent } from './facilitator/facilitator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedTableModule } from '../../shared/advanced-table/advanced-table.module';
import { FacilitatorRoutingModule } from './facilitator-routing.module';



@NgModule({
  declarations: [
    FacilitatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AdvancedTableModule,
    FacilitatorRoutingModule
  ],
  exports: [
    FacilitatorComponent
  ]
})
export class FacilitatorModule { }
