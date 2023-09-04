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
  phoneNumber: string;
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
