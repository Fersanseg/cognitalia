import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/common/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public email!:string;
  public username!:string;
  public password!:string;
  public usernameFocused:boolean = false;

  constructor(private authService:UserAuthService, private router:Router) { }

  /*ngOnInit(): void {
  }*/

  public signup(): void {
    this.authService.register(this.username, this.email, this.password).subscribe(res => {
      alert("Bienvenid@, "+(res.username ? res.username : res.email));
      this.router.navigate(["/"]);
    })
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
}
