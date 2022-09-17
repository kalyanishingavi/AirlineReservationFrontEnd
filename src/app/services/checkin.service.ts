import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private http: HttpClient) { }

  checkIn(bookingId: number) {
    const url = `http://localhost:8810/checkin/booking-MS/${bookingId}`;
    return this.http.get(url);
  }

  submit(id: number){
    const url = `http://localhost:8810/checkin/flight-MS/${id}`;
    return this.http.get(url);
  }
}
