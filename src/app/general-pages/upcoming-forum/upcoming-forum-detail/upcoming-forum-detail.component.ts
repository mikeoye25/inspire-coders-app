import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-forum-detail',
  templateUrl: './upcoming-forum-detail.component.html',
  styleUrls: ['./upcoming-forum-detail.component.scss']
})
export class UpcomingForumDetailComponent implements OnInit {

  public signupUrl: string = "/signup";
  public loginUrl: string = "/login";

  constructor() { }

  ngOnInit(): void {
  }

}
