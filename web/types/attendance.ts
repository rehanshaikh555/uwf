export interface Attendance {

    id:number;

    employee:string;

    department:string;

    checkIn:string;

    checkOut:string;

    status:"Present"|"Absent";

}