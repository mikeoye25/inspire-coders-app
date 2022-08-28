import { Component, OnInit } from '@angular/core';
import { SortEvent } from '../../../shared/advanced-table/sortable.directive';
import { Column } from '../../../shared/advanced-table/advanced-table.component';
import { FORUMS } from '../forum-data';
import { Forum } from '../forum-model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  isEmpty: boolean = false;
  public addForumUrl: string = "add";

  records: Forum[] = [];
  columns: Column[] = [];
  pageSizeOptions: number[] = [10, 25, 50, 100];

  constructor () { }

  ngOnInit(): void {
    this._fetchData();
    this.initTableCofig();
  }

  /**
 * fetches table records
 */
  _fetchData(): void {
    this.records = FORUMS;
  }

  /**
   * initialize advanced table columns
   */
  initTableCofig(): void {
    this.columns = [
      {
        name: 'name',
        label: 'Name',
        formatter: (record: Forum) => record.name,
        width: 245,
      },
      {
        name: 'numberofstudents',
        label: 'Number of Students',
        formatter: (record: Forum) => record.numberofstudents,
        width: 360,
      },
      {
        name: 'course',
        label: 'Course',
        formatter: (record: Forum) => record.course,
        width: 180
      },
      {
        name: 'facilitator',
        label: 'Facilitator',
        formatter: (record: Forum) => record.facilitator,
      },
      {
        name: 'startdate',
        label: 'Start Date',
        formatter: (record: Forum) => record.startdate,
      }
    ];
  }

  // compares two cell values
  compare(v1: string | number, v2: string | number): any {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  /**
   * Sort the table data
   * @param event column name, sort direction
   */
  onSort(event: SortEvent): void {
    if (event.direction === '') {
      this.records = FORUMS;
    } else {
      this.records = [...this.records].sort((a, b) => {
        const res = this.compare(a[event.column], b[event.column]);
        return event.direction === 'asc' ? res : -res;
      });
    }
  }

  /**
 * Match table data with search input
 * @param row Table row
 * @param term Search the value
 */
  matches(row: Forum, term: string) {
    return row.name.toLowerCase().includes(term)
      || row.numberofstudents.toLowerCase().includes(term)
      || row.course.toLowerCase().includes(term)
      || row.facilitator.toLowerCase().includes(term)
      || row.startdate.toLowerCase().includes(term);
  }

  /**
   * Search Method
  */
  searchData(searchTerm: string): void {
    if (searchTerm === '') {
      this._fetchData();
    }
    else {
      let updatedData = FORUMS;

      //  filter
      updatedData = updatedData.filter(record => this.matches(record, searchTerm));
      this.records = updatedData;
    }

  }


}
