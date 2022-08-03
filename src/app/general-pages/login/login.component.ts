import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public homeUrl: string = "/home";
  public signupUrl: string = "/signup";
  
  form : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    keepMeLoggedIn: new FormControl(false)
  });
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted = true;
    console.log(this.form.value);
  }

}
