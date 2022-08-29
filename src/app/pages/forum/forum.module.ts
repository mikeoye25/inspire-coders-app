import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedTableModule } from '../../shared/advanced-table/advanced-table.module';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumAddComponent } from './forum-add/forum-add.component';



@NgModule({
  declarations: [
    ForumComponent,
    ForumAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AdvancedTableModule,
    ForumRoutingModule
  ],
  exports: [
    ForumComponent,
    ForumAddComponent
  ]
})
export class ForumModule { }
