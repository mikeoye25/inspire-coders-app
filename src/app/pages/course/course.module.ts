import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseRoutingModule } from './course-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedTableModule } from 'src/app/shared/advanced-table/advanced-table.module';
import { CourseAddComponent } from './course-add/course-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CourseComponent,
    CourseAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AdvancedTableModule,
    CourseRoutingModule
  ],
  exports: [
    CourseComponent,
    CourseAddComponent
  ]
})
export class CourseModule { }
