import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
//import { UpFlights } from "src/app/models/addflights.model";

import { AddflightsService } from 'src/app/services/addflights.service';
import { Flights } from 'src/app/models/flight.model';
import { AddFlights } from 'src/app/models/addflights.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  id: number;
  flight: Flights;
  apiResponse: ApiResponse;
  addFlights: AddFlights;
  myForm: FormGroup;
  message: any;
  staff: Flights;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addflightsService: AddflightsService,
    private service: AddflightsService,
    private flightService: FlightService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  initForm(): void {
    this.myForm = this.fb.group({
      id: [2],
      flightName: ['Airline'],
      flightDate: ['12-10-22'],
      flightTime: ['2:00 pm'],
      destination: ['Goa'],
      origin: ['Mumbai'],
      businessClassFare: [6000],
      economyClassFare: [4000],
    });
  }

  ngOnInit() {
    //this.flight = new Flights();

    this.id = this.route.snapshot.params['id'];
    this.addflightsService.getEmployeeById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.flight = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.addflightsService.updateFlight(this.id, this.flight).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    //this.flight = new Flights();
    this.router.navigate(['/employees']);
  }

  list() {
    this.router.navigate(['employees']);
  }

  userRegister() {
    console.log(this.addFlights);
    let flightName = this.myForm.value.flightName;
    let flightDate = this.myForm.value.flightDate;
    let flightTime = this.myForm.value.flightTime;
    let origin = this.myForm.value.origin;
    let destination = this.myForm.value.destination;
    let businessClassFare = this.myForm.value.businessClassFare;
    let economyClassFare = this.myForm.value.economyClassFare;

    this.addFlights = {
      flightName: flightName,
      flightDate: flightDate,
      flightTime: flightTime,
      origin: origin,
      destination: destination,
      businessClassFare: businessClassFare,
      economyClassFare: economyClassFare,
    };
    this.service.addFlights(this.addFlights).subscribe(
      (data) => {
        alert('Added');
      },
      (error) => alert('error')
    );
  }

  onEditDep(staff: Flights) {
    this.myForm.controls['id'].setValue(staff.id);
    this.myForm.controls['flightName'].setValue(staff.flightName);
    this.myForm.controls['flightDate'].setValue(staff.flightDate);
    this.myForm.controls['flightTime'].setValue(staff.flightTime);
    this.myForm.controls['destination'].setValue(staff.destination);
    this.myForm.controls['origin'].setValue(staff.origin);
  }

  async updateFlight() {
    const payload = this.myForm.value;
    delete payload['id'];
    console.log(payload);
    
    const result = await this.flightService.updateFlight(payload, this.id);
    alert(`FLight Updated Successfully..!`)
    console.log(result);
    
  }

}
