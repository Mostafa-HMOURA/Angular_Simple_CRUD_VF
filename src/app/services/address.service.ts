import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.apiUrl}/addresses`);
  }

  _persistAddress(data: any) {
    return this.http.post(`${environment.apiUrl}/addresses`,data);
  }

  _deleteAddress(id: string) {
    console.log(`${environment.apiUrl}/addresses/${id}`);
    return this.http.delete(`${environment.apiUrl}/addresses/${id}`);
  }

}
