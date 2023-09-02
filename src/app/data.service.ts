import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getClients() {}

  updateClient(user: any) {
    console.log(user);
  }

  deleteClient(id: any) {}
}
