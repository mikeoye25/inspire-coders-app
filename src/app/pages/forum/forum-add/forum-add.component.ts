import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum-add',
  templateUrl: './forum-add.component.html',
  styleUrls: ['./forum-add.component.scss']
})
export class ForumAddComponent implements OnInit {

  constructor() { }
  
  form : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    numberofstudents: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    facilitator: new FormControl('', [Validators.required]),
    startdate: new FormControl('', [Validators.required])
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
