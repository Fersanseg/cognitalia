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
  public password1!:string;
  public password2!:string;
  public usernameFocused:boolean = false;

  constructor(private authService:UserAuthService, private router:Router) { }

  /*ngOnInit(): void {
  }*/

  public signup(): void {
    if (this.validatePasswords()) {
      this.authService.register(this.username, this.email, this.password1).subscribe(res => {
        alert("Bienvenid@, "+(res.username ? res.username : res.email));
        this.router.navigate(["/"]);
      })
    } else {
      alert("ERROR: Las contraseñas no coinciden");
    }
  }

  public focus(e: any) {
    switch (e.target.id) {
      case ("usernameRegister"):
        this.usernameFocused = true;
        break;
    }
  }
//////////////////////////////////////////////////////
// ALGO SE HA JODIDO EN EL PHP, ESTA DEVOLVIENDO FALLO
//////////////////////////////////////////////////////
  public blur(e:any){
    switch (e.target.id) {
      case ("usernameRegister"):
        this.usernameFocused = false;
        break;
    }
  }

  private validatePasswords():boolean {
    return this.password1 === this.password2 ? true : false;
  }
}
