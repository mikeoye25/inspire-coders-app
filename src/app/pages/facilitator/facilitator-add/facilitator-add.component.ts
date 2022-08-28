import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facilitator-add',
  templateUrl: './facilitator-add.component.html',
  styleUrls: ['./facilitator-add.component.scss']
})
export class FacilitatorAddComponent implements OnInit {

  constructor() { }
  
  form : FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });
  submitted = false;

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
