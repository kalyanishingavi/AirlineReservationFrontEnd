import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin-component',
  templateUrl: './checkin-component.component.html',
  styleUrls: ['./checkin-component.component.css']
})
export class CheckinComponentComponent implements OnInit {

  bookingData = null;
  searchData = null;
  checkInForm: FormGroup = null;
  flightForm: FormGroup = null;
  constructor(
    private checkInService: CheckinService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkInForm = this.fb.group({
      bookingId: ['5', Validators.required],
    }),
    this.flightForm = this.fb.group({
      id: ['5', Validators.required],
    });
  }

  checkIn() {
    console.log(this.checkInForm);
    if(this.checkInForm.valid) {
      this.checkInService.checkIn(this.checkInForm.value.bookingId).subscribe(data => {
        this.bookingData = data;
        console.log(data)
      });
    }
  }

  submit(){
    console.log(this.flightForm);
    if(this.flightForm.valid) {
      this.checkInService.submit(this.flightForm.value.id).subscribe(data => {
        this.searchData = data;
        console.log(data)
      });
    }
  }

  goToHome(): void {
    this.router.navigate([''], { relativeTo: this.activatedRoute})
  }
}
