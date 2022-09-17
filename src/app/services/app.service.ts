import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  loggedIn = new BehaviorSubject<boolean>(false);

  getAllUsers(){
    return this.http.get("http://localhost:8083/user");
  }
}
