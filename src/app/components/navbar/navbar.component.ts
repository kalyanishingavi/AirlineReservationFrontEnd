import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 // doctors: Doctor[];
  errorMsg:string;
  //patients: Patient[];
  count: number;
  username: string;
  loggedIn: boolean;
  //patientArry: Patient[];

  constructor( private appService: AppService) { }//private doctorService: DoctorService,

  ngOnInit(): void {

    this.appService.loggedIn.subscribe(data=>{

      let status = localStorage.getItem('isLoggedIn');
        if(status){
            this.loggedIn = true;
            let token = localStorage.getItem('token');
            token = atob(token);
            console.log(token);
            this.username = token.split(":")[0];
        }
        else{
            this.loggedIn = false;
        }
  });

  //this.doctorService.getAllDoctors().subscribe(data=>{
    //this.doctors=data;
 // },
  
  //error=>{
    //this.errorMsg='Could not load Doctors. Try refreshing or contact administractor'
 // }
 // );
  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
  }

  //showAppointment(){
    //this.patientArry = this.patients;
  //}

}
