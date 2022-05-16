import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/common/user-auth.service';
import { ILoginToken } from 'src/app/utils/interfaces/ilogin-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn$!:Observable<ILoginToken>;
  public logged!:boolean;
  public username!:string;

  constructor(private route: Router, private authService:UserAuthService) { }

  ngOnInit(): void {
    this.loggedIn$ = this.authService.getUser();
  }
  
  public hasRoute(route: string) {
    return route === this.route.url;
  }

  public logout():void {
    alert("Vuelve pronto!");
    this.authService.logout();
  }

}
