import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddFlights } from 'src/app/models/addflights.model';
import { Flights } from 'src/app/models/flight.model';
import { AdminSearchService } from 'src/app/services/admin-search.service';

@Component({
  selector: 'app-admin-search-flights',
  templateUrl: './admin-search-flights.component.html',
  styleUrls: ['./admin-search-flights.component.css']
})
export class AdminSearchFlightsComponent implements OnInit {

  /*updateFlights:AddFlights;*/
  flights: any;
  origin: any;
  destination: any;
  formValue!: FormGroup;
  p: number=1;
  constructor(
    private service:AdminSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let response = this.service.adminSearchFlight();
    response.subscribe((data: any) => (this.flights = data));
  }

  searchFlight(source: any, destination: any) {
    let response = this.service.searchFlightByOriginAndDestination(source, destination);
    response.subscribe((data) => (this.flights = data));
    console.log(this.flights);
  }

  reset() {
    let response = this.service.getAllFlights();
    response.subscribe((data) => (this.flights = data));
  }

  

  deleteFlight(id: any) {
    let response = this.service.deleteFlight(id);
    response.subscribe((data) => console.log(data));
    location.reload();
  }

  updateFlight(id: number){
    this.router.navigate(['update-flight',id]);
  }

  onEditDep(staff:Flights) {
    this.formValue.controls['id'].setValue(staff.id);
    this.formValue.controls['flightName'].setValue(staff.flightName);
    this.formValue.controls['flightDate'].setValue(staff.flightDate);
    this.formValue.controls['flightTime'].setValue(staff.flightTime);
    this.formValue.controls['origin'].setValue(staff.origin);
    this.formValue.controls['destination'].setValue(staff.destination);
    this.formValue.controls['businessClassFare'].setValue(staff.businessClassFare);
    this.formValue.controls['economyClassFare'].setValue(staff.economyClassFare);
  }
}