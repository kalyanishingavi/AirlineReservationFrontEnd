import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  oldTicket = new BehaviorSubject([]);

  getProduct(){
    return[
      {"name":"kalyani"},
      {"name":"harry"}
    ]
  }
}
