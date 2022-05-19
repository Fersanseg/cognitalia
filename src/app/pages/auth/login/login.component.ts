import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/common/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username!:string;
  public password!:string;

  constructor(private authService:UserAuthService, private router:Router) { }

  /*ngOnInit(): void {
  }*/

  public submitCredentials(): void {
    this.authService.login(this.username, this.password).subscribe(res => {
      alert("Bienvenid@, "+(res.username ? res.username : res.email));
      this.router.navigate(["/"]);
    });
  }
}
