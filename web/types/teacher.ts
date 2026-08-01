export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  status: "Active" | "Inactive";
}