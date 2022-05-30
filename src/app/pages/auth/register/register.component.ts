import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/common/user-auth.service';
import { IAuthToken } from 'src/app/utils/interfaces/iauth-token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public email!:string;
  public username!:string;
  public password1!:string;
  public password2!:string;
  public usernameFocused:boolean = false;
  public account_exists:boolean = false;

  constructor(private authService:UserAuthService, private router:Router) { }

  /*ngOnInit(): void {
  }*/

  public signup(): void {
    if (this.validatePasswords()) {
      this.authService.register(this.username, this.email, this.password1).subscribe(res => {
        if(res.state == "success") {
          this.processSuccessfulRegister(res);
        } else if (res.state == "failure") {
          this.processFailedRegister(res);
        }
      })
    } else {
      alert("ERROR: Passwords aren't the same");
    }
  }

  public focus(e: any) {
    switch (e.target.id) {
      case ("usernameRegister"):
        this.usernameFocused = true;
        break;
    }
  }
  
  public blur(e:any){
    switch (e.target.id) {
      case ("usernameRegister"):
        this.usernameFocused = false;
        break;
    }
  }

  private processSuccessfulRegister(token:IAuthToken):void {
    alert("Welcome, "+(token.username));
    this.router.navigate(["/"]);
  }

  private processFailedRegister(token:IAuthToken):void {
    switch (token.additionalInfo) {
      case "acc_exists":
        alert("An account with this email already exists. Please log in instead, or if it's not you, try another email");
        break;
      case "db_error":
        alert("There was an error in our database. Please try again later");
        break;
      default:
        alert("An unexpected error occurred. Try again later, or inform the website admin if the error keeps happening");
        break;
    }
  }

  private validatePasswords():boolean {
    return this.password1 === this.password2 ? true : false;
  }
}
