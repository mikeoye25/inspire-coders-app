import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public signupUrl: string = "/signup";
  public loginUrl: string = "/login";
  public howitworkUrl: string = "/cc";

   constructor () {}

   ngOnInit(): void {

   }
}

