import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ILoginToken } from 'src/app/utils/interfaces/ilogin-token';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private authEndpoint = "http://localhost/cognitalia/api/auth/login.php";
  private loggedInUserSubject!: BehaviorSubject<any>;

  constructor(private http:HttpClient, private router:Router) { 
    const isLogged = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.loggedInUserSubject = new BehaviorSubject(Object.keys(isLogged).length == 0 ? false : isLogged);
  }

  public login(user:string, password:string):Observable<ILoginToken> {    
    return this.http.post<ILoginToken>(this.authEndpoint, {user, password}).pipe(
      map(response => {
        localStorage.setItem("loggedInUser", JSON.stringify(response));
        this.loggedInUserSubject.next(response);
        alert("Bienvenid@, "+(response.username ? response.username : response.email));
        this.router.navigate(["/"]);
        return response;
      })
    )
  }

  public logout(): void {
    this.loggedInUserSubject.next(false);
    localStorage.removeItem("loggedInUser");
  }

  public getUser(): Observable<ILoginToken> {
    return this.loggedInUserSubject.asObservable();
  }
}
