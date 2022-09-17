import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/models/userdata';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  users: any;
  errorMsg: string;

  constructor(private router: Router, private appService:AppService) { }

  ngOnInit(): void {
    //this.users =  users;
    this.users =this.appService.getAllUsers().subscribe(data=>this.users=data);
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onFormSubmit(){

    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    let user = this.users.find(u=> (u.username === username && u.password === password));

    if(user){
      localStorage.setItem("isLoggedIn","true");
      let token = btoa(username + ':' + password);
      localStorage.setItem("token", token);
      this.appService.loggedIn.next(true);
      this.router.navigateByUrl('/allowuser');

    }else{
      this.errorMsg = "Invalid User";
    }
    
  }

}
