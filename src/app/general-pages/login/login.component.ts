import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../core/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public homeUrl: string = "/home";
  public signupUrl: string = "/signup";
  public dashboardUrl: string = "/pages/dashboard";
  
  form : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    keepMeLoggedIn: new FormControl(false)
  });
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;
    console.log(this.form.value);

    let user: User = {
          id: 1, 
          username: 'test', 
          email: 'adminto@coderthemes.com', 
          password: 'test', 
          firstName: 'Nowak', 
          lastName: 'Helme',
          avatar: 'assets/images/users/user-1.jpg', 
          location: 'California, USA', 
          title: 'Admin Head'
      };

    // store user details and jwt in session
    sessionStorage.setItem('currentUser', JSON.stringify(user));

    this.router.navigate([this.dashboardUrl]);
  }

}
