import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public homeUrl: string = "/home";
  
  form : FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
    confirmPassword: new FormControl('', [Validators.required]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue])
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
