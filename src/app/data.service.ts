import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { Form } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
  getClients() {
    const url = `https://dev-538w959906n2359.api.raw-labs.com/clients`;
    return this.http.get(url);
  }

  addClient(data: Form) {
    const url = ``;
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  updateClient(user: Form) {
    const url = `url/${user.id}`;
    return this.http.put(url, user).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  deleteClient(id: string) {
    const url = `url/${id}`;
    return this.http.delete(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  getInstitutions() {
    const url = '';
    return this.http.get(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  addInstitution(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  deleteInstitutions(id: any) {
    const url = `url/${id}`;
    return this.http.delete(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  getCreditCardCompanies() {
    const url = '';
    return this.http.get(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  addCreditCardComapanies(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  deleteCreditCardCompanies(id: any) {
    const url = `url/${id}`;
    return this.http.delete(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  getAccountById(id: any) {
    const url = `url/${id}`;
    return this.http.get(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  athenticationAddress(data: any) {
    const url = `url`;
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  addNewTransaction(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  makeDeposit(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  makeFundTransfer(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  makeWithdrawal(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  getFeedback() {
    const url = '';
    return this.http.get(url).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }

  clientRegistration(data: any) {
    const url = '';
    return this.http.post(url, data).pipe(
      tap((data) => data),
      catchError(this.handleError)
    );
  }
}
