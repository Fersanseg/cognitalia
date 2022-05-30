import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/common/user-auth.service';
import { IAuthToken } from 'src/app/utils/interfaces/iauth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username!:string;
  public password!:string;

  constructor(private authService:UserAuthService, private router:Router) { }

  // ngOnInit(): void {
  // }

  public submitCredentials(): void {
    this.authService.login(this.username, this.password).subscribe(res => {
      console.log(res);
      if(res.state == "success") {
        this.processSuccessfulLogin(res)
      } else if (res.state == "failure") {
        this.processFailedLogin(res);
      }
    });
  }

  private processSuccessfulLogin(token:IAuthToken):void {
    alert("Welcome, "+(token.username));
    this.router.navigate(["/"]);
  }

  private processFailedLogin(token:IAuthToken):void {
    switch (token.additionalInfo) {
      case "user_notFound":
        alert("Can't find a user with the specified credentials. Please try again");
        break;
      case "pw_incorrect":
        alert("The password didn't match the specified user. Please try again");
        break;
      default:
        alert("An unexpected error occurred. Try again later, or inform the website admin if the error keeps happening");
        break;
    }
  }
}
