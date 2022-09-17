import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
//import { UpFlights } from "src/app/models/addflights.model";

import { AddflightsService } from 'src/app/services/addflights.service';
import { Flights } from 'src/app/models/flight.model';
import { AddFlights } from 'src/app/models/addflights.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  id: number;
  flight: Flights;
  apiResponse:ApiResponse;
  addFlights: AddFlights;
  myForm: FormGroup;
  message:any;
  

  constructor(private route: ActivatedRoute,private router: Router,
    private addflightsService: AddflightsService,private service:AddflightsService) { }

  ngOnInit() {
    //this.flight = new Flights();

    this.id = this.route.snapshot.params['id'];
    this.addflightsService.getEmployeeById(this.id)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.addflightsService.updateFlight(this.id, this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.flight = new Flights();
    this.router.navigate(['/employees']);
    }

  
  list(){
    this.router.navigate(['employees']);
  }

  userRegister(){
    console.log(this.addFlights);
    let flightName = this.myForm.value.flightName;
    let flightDate = this.myForm.value.flightDate;
    let flightTime = this.myForm.value.flightTime;
    let origin = this.myForm.value.origin;
    let destination = this.myForm.value.destination;
    let businessClassFare = this.myForm.value.businessClassFare;
    let economyClassFare = this.myForm.value.economyClassFare;

    

    this.addFlights={
      flightName:flightName,
      flightDate:flightDate,
      flightTime:flightTime,
      origin:origin,
      destination:destination,
      businessClassFare:businessClassFare,
      economyClassFare:economyClassFare


    }
    this.service.addFlights(this.addFlights).subscribe(data=>{
      alert("Added")
    },error=>alert("error"));
    
    
  }


}
