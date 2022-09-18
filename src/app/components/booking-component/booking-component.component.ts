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
  firstName:any;
  p: number=1;
  bookingId:any;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBookings()
    .subscribe(data=>(this.books=data));
    
  }
  Search(){
    if (this.firstName == ""){
      this.ngOnInit();
    }else{
      this.books = this.books.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      }
        )
    }
  }

  key: string = 'bookingId';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  

}
