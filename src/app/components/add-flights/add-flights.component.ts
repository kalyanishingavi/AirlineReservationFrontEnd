import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddFlights } from 'src/app/models/addflights.model';
import { Flights } from 'src/app/models/flight.model';
import { AddflightsService } from 'src/app/services/addflights.service';

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.css']
})
export class AddFlightsComponent implements OnInit {

  addFlights: AddFlights;
  myForm: FormGroup;
  message:any;
  flight:Flights
  constructor(private service:AddflightsService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.myForm = new FormGroup({
      flightName: new FormControl(''),
      flightDate: new FormControl(''),
      flightTime: new FormControl(''),
      origin: new FormControl(''),
      destination: new FormControl(''),
      businessClassFare: new FormControl(''),
      economyClassFare: new FormControl(''),
    })
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

  /*onEditDep(staff:Flights) {
    this.formValue.controls['empId'].setValue(staff.id);
    this.formValue.controls['empDeptId'].setValue(staff.flightName);
    this.formValue.controls['empName'].setValue(staff.flightDate);
    this.formValue.controls['empDeptName'].setValue(staff.flightTime);
    this.formValue.controls['email'].setValue(staff.origin);
    this.formValue.controls['empSalary'].setValue(staff.destination);
  }*/

}

