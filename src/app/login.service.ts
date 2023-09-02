import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admins, Login } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  adminLogin(loginDetails?: Admins) {
    //  this.http.post('../assets',loginDetails)
    const url = '../assets/admins.json';
    return this.http.get(url);
  }
}
