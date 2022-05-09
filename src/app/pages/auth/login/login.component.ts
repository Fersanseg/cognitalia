import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username!:string;
  public password!:string;
  public emailValidation!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  loginSubmit(param:any) {
    // console.log(param);
  }

  log(x:any) {
    console.log(x);
  }

}
