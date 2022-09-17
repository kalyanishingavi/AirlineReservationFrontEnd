import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message = "mymessage"
  pipess :string= "Wellllcomeeeee to my application #pipes"
  amount: number=500
  products: any
  users: any
  constructor(service: TestService, private http:HttpClient) {
    this.products=service.getProduct();
   }

  ngOnInit(){
    let res = this.http.get("https://jsonplaceholder.typicode.com/users");
    res.subscribe((data)=>this.users=data);
  }

}
