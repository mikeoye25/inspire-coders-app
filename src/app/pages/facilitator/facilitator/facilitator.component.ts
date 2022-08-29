import { Component, OnInit } from '@angular/core';
import { SortEvent } from '../../../shared/advanced-table/sortable.directive';
import { Column } from '../../../shared/advanced-table/advanced-table.component';
import { FACILITATORS } from '../facilitator-data';
import { Facilitator } from '../facilitator-model';

@Component({
  selector: 'app-facilitator',
  templateUrl: './facilitator.component.html',
  styleUrls: ['./facilitator.component.scss']
})
export class FacilitatorComponent implements OnInit {

  isEmpty: boolean = true;
  public addFacilitatorUrl: string = "add";

  records: Facilitator[] = [];
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
    this.records = FACILITATORS;
  }

  /**
   * initialize advanced table columns
   */
  initTableCofig(): void {
    this.columns = [
      {
        name: 'firstname',
        label: 'First Name',
        formatter: (record: Facilitator) => record.firstname,
        width: 245,
      },
      {
        name: 'lastname',
        label: 'Last Name',
        formatter: (record: Facilitator) => record.lastname,
        width: 360,
      },
      {
        name: 'email',
        label: 'Email Address',
        formatter: (record: Facilitator) => record.email,
        width: 180
      },
      {
        name: 'username',
        label: 'Username',
        formatter: (record: Facilitator) => record.username,
      },
      {
        name: 'course',
        label: 'Course',
        formatter: (record: Facilitator) => record.course,
      },
      {
        name: 'phone',
        label: 'Phone Number',
        formatter: (record: Facilitator) => record.phone,

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
      this.records = FACILITATORS;
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
  matches(row: Facilitator, term: string) {
    return row.firstname.toLowerCase().includes(term)
      || row.lastname.toLowerCase().includes(term)
      || row.email.toLowerCase().includes(term)
      || row.username.toLowerCase().includes(term)
      || row.course.toLowerCase().includes(term)
      || row.phone.toLowerCase().includes(term);
  }

  /**
   * Search Method
  */
  searchData(searchTerm: string): void {
    if (searchTerm === '') {
      this._fetchData();
    }
    else {
      let updatedData = FACILITATORS;

      //  filter
      updatedData = updatedData.filter(record => this.matches(record, searchTerm));
      this.records = updatedData;
    }

  }


}
