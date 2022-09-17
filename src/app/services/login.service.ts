import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8083/user/register"
  constructor(private http:HttpClient) { }

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  addLogin(login: Login): Observable<object> {
    console.log(login);
    return this.http.post(`${this.baseUrl}`,login);
  }

  public login(loginData: any) {
    return this.http.get(
      'http://localhost:8083/user/login',
      loginData,
      
    );
  }
}
