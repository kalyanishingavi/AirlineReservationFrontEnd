import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from '../models/flight.model';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  baseUrl="";
  constructor(private http:HttpClient) { }

  getAllFlights(){
    return this.http.get("http://localhost:8081/search");
  }

  public searchFlightByOriginAndDestination(origin: any, destination: any) {
    return this.http.get(
      'http://localhost:8081/search/origin/destination/' + origin +'/' + destination,
      );
  }

  updateFlight(id: number, flight: Flights): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + flight.id, flight);
  }

  
}
