import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumAddComponent } from './forum-add/forum-add.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent
  },
  {
    path: 'add',
    component: ForumAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
