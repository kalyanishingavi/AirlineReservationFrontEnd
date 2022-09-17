import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTickets } from '../models/booktickets.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl = "http://localhost:8082/book";
  /*postUrl = "http://localhost:8082/patient/add/";*/
  constructor(private http:HttpClient) { }

  getAllBookings(){
    return this.http.get("http://localhost:8082/book");
  }

  addTicket(bookTicket: BookTickets): Observable<object> {
    console.log(bookTicket);
    return this.http.post(`${this.baseUrl}`,bookTicket);
  }
}
