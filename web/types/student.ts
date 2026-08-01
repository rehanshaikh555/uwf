export interface Student {
  id: number;
  name: string;
  rollNo: string;
  className: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
}