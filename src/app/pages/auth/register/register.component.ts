import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/common/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public email!:string;
  public password!:string;

  constructor(private authService:UserAuthService) { }

  ngOnInit(): void {
  }

  public signup(): void {

  }

}
