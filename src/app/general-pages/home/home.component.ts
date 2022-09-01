import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public signupUrl: string = "/signup";
  public loginUrl: string = "/login";
  public howitworkUrl: string ="/cc";

  constructor() { }

  ngOnInit(): void {
  }

}
