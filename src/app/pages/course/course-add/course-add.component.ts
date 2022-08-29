import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  constructor() { }
  
  form : FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    instructor: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
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

    // this.router.navigate([this.dashboardUrl]);
  }

}
