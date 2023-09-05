export interface Login {
  email: string;
  password: string;
}

export interface Admin extends Login {
  userName: string;
}

export interface Admins {
  admins: Admin[];
}

export interface Form {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: any;
  address: string;
  id?: number;
}

export interface Client {
  email: string;
  userName?: string;
  password: string;
}

export interface Clients {
  clients: Client[];
}

export interface CreditCardCompanies {
  creditCardCompany: Client[];
}

export interface Product {
  id: number;
  name: string;
  companyId: number;
}

export interface Feedback {
  id: number;
  comment: string;
  companyId: number;
}

export interface Feedbacks {
  id: number;
  name: string;
  products: Product[];
  feedback: Feedback;
}
