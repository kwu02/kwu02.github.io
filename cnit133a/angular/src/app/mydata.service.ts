import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://reqres.in/api/users');
  }

}
