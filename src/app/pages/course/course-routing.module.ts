import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  },
  {
    path: 'add',
    component: CourseAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
