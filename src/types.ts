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
