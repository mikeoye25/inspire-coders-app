// Table data
export interface Facilitator {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    course: string;
    phone: string;

    [key: string]: string | number;
}