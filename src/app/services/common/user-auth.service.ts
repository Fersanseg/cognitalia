import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IAuthToken } from 'src/app/utils/interfaces/iauth-token';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private authEndpoint = "http://localhost/cognitalia/api/auth";
  private loggedInUserSubject!: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    const isLogged = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    this.loggedInUserSubject = new BehaviorSubject(Object.keys(isLogged).length == 0 ? false : isLogged);
  }

    public login(user:string, password:string):Observable<IAuthToken> {    
      return this.http.post<IAuthToken>(`${this.authEndpoint}/login.php`, {user, password}).pipe(
        tap(res => {
          if (res.state == "success")
            this.processSuccessfulAuth(res);
        })
      )
  }

  public register(username:string, email:string, password:string):Observable<IAuthToken> {
    return this.http.post<IAuthToken>(`${this.authEndpoint}/register.php`, {username, email, password}).pipe(
      tap(res => {
        if (res.state == "success") 
          this.processSuccessfulAuth(res);
      })
    )
  }

  public logout(): void {
    this.loggedInUserSubject.next(false);
    localStorage.removeItem("loggedInUser");
  }

  public getUser(): Observable<IAuthToken> {
    return this.loggedInUserSubject.asObservable();
  }

  private processSuccessfulAuth(token:IAuthToken) {
    localStorage.setItem("loggedInUser", JSON.stringify(token));
    this.loggedInUserSubject.next(token);
  }
}
