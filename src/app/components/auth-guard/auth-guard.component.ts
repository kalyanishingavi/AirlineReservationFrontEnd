import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { users } from 'src/app/models/userdata';
import { AppService } from 'src/app/services/app.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})
export class AuthGuardComponent implements OnInit {

  loginForm: FormGroup;
  users: any;
  errorMsg: string;

  constructor(private router: Router, private appService:AppService) { }

  ngOnInit(): void {
    this.users =  users;
    //this.users =this.appService.getAllUsers().subscribe(data=>this.users=data);
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
      this.router.navigateByUrl('/allow');

    }else{
      this.errorMsg = "Invalid User";
    }
    
  }


}
