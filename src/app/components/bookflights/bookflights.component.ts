import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookTickets } from 'src/app/models/booktickets.model';
import { BookingService } from 'src/app/services/booking.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Flights } from 'src/app/models/flight.model';

@Component({
  selector: 'app-bookflights',
  templateUrl: './bookflights.component.html',
  styleUrls: ['./bookflights.component.css']
})
export class BookflightsComponent implements OnInit {

  bookTicket: BookTickets;
  flightId: number;
  myForm: FormGroup;
  flights: Flights
  message:any
  constructor(private service:BookingService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.flightId = this.actRoute.snapshot.params['did'];
    console.log(this.flightId);
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      noOfSeats: new FormControl(''),
      classs: new FormControl(''),
      gender: new FormControl(''),
      flightId: new FormControl('')
    })
  }

  userRegister(){
    console.log(this.bookTicket);
    let firstName = this.myForm.value.firstName;
    let lastName = this.myForm.value.lastName;
    let noOfSeats = this.myForm.value.noOfSeats;
    let classs = this.myForm.value.classs;
    let gender = this.myForm.value.gender;
    let flightId = this.myForm.value.flightId;

    this.flights={
      id:this.flightId
    }

    this.bookTicket={
      firstName:firstName,
      lastName:lastName,
      noOfSeats:noOfSeats,
      classs:classs,
      gender:gender,
      flightId:flightId,
      flights:this.flights

    }
    this.service.addTicket(this.bookTicket).subscribe(data=>{
      alert("Added")
    },error=>alert("error"));
    
    
  }

  

}
