import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedTableComponent } from './advanced-table.component';
import { NgbSortableHeaderDirective } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AdvancedTableComponent,
    NgbSortableHeaderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule
  ],
  exports: [AdvancedTableComponent]
})
export class AdvancedTableModule { }
