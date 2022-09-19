import { Component, OnInit } from '@angular/core';
import { Flights } from 'src/app/models/flight.model';
import { FlightSearchService } from 'src/app/services/flight-search.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-flight-component',
  templateUrl: './flight-component.component.html',
  styleUrls: ['./flight-component.component.css']
})
export class FlightComponentComponent implements OnInit {


  
  flights: any;
  origin: any;
  destination: any;
  did: number;
  p: number=1;
  flight: Flights[];

  constructor(private flightSearchService: FlightSearchService, private testService: TestService ) { }

  ngOnInit(): void {
    this.flightSearchService.getAllFlights().subscribe(data=>this.flights=data);
  }

  addTickets(ticket: Flights){
    console.log(this.did);
    //Reach out to cart_product[] and push this object in that array.

    //step1: extract the array out of subject
    let productArray = this.testService.oldTicket.value;
    //step2: push the product into extracted array
    productArray.push(ticket);
    //step3: Update the subject with new value of extracted array
    this.testService.oldTicket.next(productArray);
   }

   searchFlight(source: any, destination: any) {
    let response = this.flightSearchService.searchFlightByOriginAndDestination(source, destination);
    response.subscribe((data) => (this.flights = data));
    console.log(this.flights);
  }

  reset() {
    let response = this.flightSearchService.getAllFlights();
    response.subscribe((data) => (this.flights = data));
  }
}
