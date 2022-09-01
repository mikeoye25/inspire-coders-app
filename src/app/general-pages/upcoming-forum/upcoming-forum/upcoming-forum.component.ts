import { Component, OnInit } from '@angular/core';
import { UPCOMINGFORUMS } from '../upcoming-forum-data';
import { UpcomingForum } from '../upcoming-forum-model';

@Component({
  selector: 'app-upcoming-forum',
  templateUrl: './upcoming-forum.component.html',
  styleUrls: ['./upcoming-forum.component.scss']
})
export class UpcomingForumComponent implements OnInit {

  isEmpty: boolean = false;
  public forumidUrl: string = "/forum/:id"

  records: UpcomingForum[] = [];

  constructor() { }

  ngOnInit(): void {
    this._fetchData();
  }

  /**
 * fetches table records
 */
  _fetchData(): void {
    this.records = UPCOMINGFORUMS;
    console.log(`upcoming forums: ${JSON.stringify(this.records)}`);
  }

}
