import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFlights } from '../models/addflights.model';

@Injectable({
  providedIn: 'root'
})
export class AdminSearchService {

  constructor(private http: HttpClient) {}

  public adminSearchFlight() {
    return this.http.get('http://localhost:8081/search');
  }

  public getAllFlights() {
   
    return this.http.get('http://localhost:8081/search'
    );
  }

  public searchFlightByOriginAndDestination(origin: any, destination: any) {
    return this.http.get(
      'http://localhost:8081/search/origin/destination/' + origin +'/' + destination,
      );
  }

  public deleteFlight(id: any) {
    return this.http.delete(
      'http://localhost:8081/search/delete/' + id,
      );
  }

  baseUrl = "http://localhost:8081/search";
  /*postUrl = "http://localhost:8082/patient/add/";*/
  



  /*updateFlights(updateFlights: AddFlights): Observable<object> {
    console.log(updateFlights);
    return this.http.put(`${this.baseUrl}`,updateFlights);
  }*/
}

  /*public updateFlight(id: any,origin:any) {
    return this.http.put(
      'http://localhost:8081/search/update/' + id + origin,
      );
  }*/

