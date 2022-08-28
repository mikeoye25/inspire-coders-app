// Table data
export interface Forum {
    name: string;
    numberofstudents: string;
    course: string;
    facilitator: string;
    startdate: string;

    [key: string]: string | number;
}