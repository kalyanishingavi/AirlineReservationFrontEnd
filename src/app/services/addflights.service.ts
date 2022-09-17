import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFlights } from '../models/addflights.model';
import { ApiResponse } from '../models/apiResponse';
import { BookTickets } from '../models/booktickets.model';
import { Flights } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class AddflightsService {

  baseUrl = "http://localhost:8081/search";
  /*postUrl = "http://localhost:8082/patient/add/";*/
  constructor(private http:HttpClient) { }



  addFlights(addFlights: AddFlights): Observable<object> {
    console.log(addFlights);
    return this.http.post(`${this.baseUrl}`,addFlights);
  }

  updateFlight(id: number, flight: Flights): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + flight.id, flight);
  }

  getEmployeeById(id: any){
    return this.http.post(`${this.baseUrl}`,id);
  }

  editFlight(){
    
  }
}
