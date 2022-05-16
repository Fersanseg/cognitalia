import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/common/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username!:string;
  public password!:string;
  public emailValidation!:boolean;

  constructor(private authService:UserAuthService) { }

  ngOnInit(): void {
  }

  public submitCredentials(): void {
    this.authService.login(this.username, this.password).subscribe();
  }
}
