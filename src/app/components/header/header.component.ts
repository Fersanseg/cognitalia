import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/common/user-auth.service';
import { IAuthToken } from 'src/app/utils/interfaces/iauth-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn$!:Observable<IAuthToken>;
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
    alert("Come back soon!");
    this.authService.logout();
  }
}
