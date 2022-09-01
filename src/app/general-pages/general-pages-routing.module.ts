import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpcomingForumComponent } from './upcoming-forum/upcoming-forum/upcoming-forum.component';
import { UpcomingForumDetailComponent } from './upcoming-forum/upcoming-forum-detail/upcoming-forum-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cc', component: UpcomingForumComponent },
  { path: 'forum/:id', component: UpcomingForumDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GeneralPagesRoutingModule { }
