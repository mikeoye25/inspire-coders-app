import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralPagesRoutingModule } from './general-pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    GeneralPagesRoutingModule
  ],
  providers: [
  ],
  exports: [
    HomeComponent,
    SignupComponent,
    LoginComponent
  ]
})
export class GeneralPagesModule { }
