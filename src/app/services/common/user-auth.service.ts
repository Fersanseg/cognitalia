import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private authEndpoint = "http://localhost/cognitalia/api/auth/login.php";
  // subject para el usuario logeado
  // observable que se va a emitir a partir del subject

  constructor(private http:HttpClient) { 
    // subject inicializado
    // observable inicializado
  }

  login(user:string, password:string): void {
    //let creds = 
    this.http.post<any>(this.authEndpoint, {user, password}).subscribe(res => console.log(res));
  }
}
