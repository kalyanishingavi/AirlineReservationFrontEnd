import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  login: Login;
  loginId: number;
  myForm: FormGroup;
  message:any
  id: number;
  constructor(private loginService:LoginService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.actRoute.snapshot.params['did'];
    console.log(this.id);
    this.myForm = new FormGroup({
      username: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      id: new FormControl(''),
      role: new FormControl('')
    })
  }

  userRegister(){
    console.log(this.login);
    let username = this.myForm.value.username;
    let gender = this.myForm.value.gender;
    let phone = this.myForm.value.phone;
    let email = this.myForm.value.email;
    let password = this.myForm.value.password;
    let id = this.myForm.value.id;
    let role = this.myForm.value.id;

    this.login={
      id:this.id
    }
    

    this.login={
      username:username,
      gender:gender,
      phone:phone,
      email:email,
      password:password,
      id:id,
      role:role,
      
      
      

    }
    this.loginService.addLogin(this.login).subscribe(data=>{
      alert("Added")
    },error=>alert("error"));
    
    
  }

}
