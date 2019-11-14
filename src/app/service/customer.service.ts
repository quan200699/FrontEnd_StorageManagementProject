import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('https://storagemanagement-sp.herokuapp.com/customers');
  }

  createCustomer(customer: Partial<Customer>): Observable<Customer> {
    return this.http.post<Customer>('https://storagemanagement-sp.herokuapp.com/customers', customer);
  }

  editCustomer(id: number, customer: Partial<Customer>): Observable<Customer> {
    return this.http.put<Customer>(`https://storagemanagement-sp.herokuapp.com/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`https://storagemanagement-sp.herokuapp.com/customers/${id}`);
  }

  customerDetail(id: string): Observable<Customer> {
    return this.http.get<Customer>(`https://storagemanagement-sp.herokuapp.com/customers/${id}`);
  }
}
