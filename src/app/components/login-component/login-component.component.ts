import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  // login:any = new Login("","");

  authRequest: any = {
    username: 'dhaaneshwar@gmail.com',
    password: 'abc',
  };

  constructor(
    private service: LoginService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login(loginForm: NgForm) {
    this.service.login(loginForm.value).subscribe(
      (data: any) => {
        console.log(data.jwt);

        this.userAuthService.setUser(data.registerUser);
        this.userAuthService.setToken(data.jwt);

        this.router.navigate(['/Home']);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(loginForm.value);
  }

  // public signIn(){
  //   console.log(this.login.username);
  //   this.getAccessToken(this.authRequest);
  // }

  // public getAccessToken(authRequest:any){
  //   let response=this.service.generateToken(authRequest);
  //   response.subscribe(data=>console.log(data));
  // }

}
