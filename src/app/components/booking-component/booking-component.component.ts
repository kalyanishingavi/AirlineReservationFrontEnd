import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-component',
  templateUrl: './booking-component.component.html',
  styleUrls: ['./booking-component.component.css']
})
export class BookingComponentComponent implements OnInit {

  books:any;
  searchClass:string="";

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBookings()
    .subscribe(data=>(this.books=data));
    
  }

}
