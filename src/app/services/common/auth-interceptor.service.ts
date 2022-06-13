import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { IAuthToken } from 'src/app/utils/interfaces/iauth-token';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private refreshing:boolean = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService:UserAuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const sessionToken = this.authService.getSessionToken();

    if (sessionToken && Object.keys(sessionToken).length !== 0) {
      console.log("PETICION HTTP INTERCEPTADA");
      authRequest = this.addTokenToHeaders(req, sessionToken);
    }

    return next.handle(authRequest).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          return this.handle401error(authRequest, next);
        }
        return throwError(() => err);
      })
    )
  }

  private handle401error(req:HttpRequest<any>, next:HttpHandler) {
    if (!this.refreshing) {
      console.log("EMPEZANDO A PROCESAR EL ERROR 401")
      this.refreshing = true; // Blocks new intercepted http request from getting handled if one is currently being refreshed
      this.refreshTokenSubject.next(null);
      const token = this.authService.getSessionToken();

      if (token) {
        console.log("SE PIDE UN NUEVO TOKEN DE SESIÓN (nueva petición http: se va a interceptar y añadir token expirado a cabecera)")
          return this.authService.refreshSessionToken(token.username).pipe(
            switchMap((token:any) => {
            this.refreshing = false;
            
            console.log("GUARDAMOS NUEVO TOKEN DE SESIÓN");
            localStorage.setItem("loggedInUser", JSON.stringify(token));
            this.refreshTokenSubject.next(token);

            console.log("AÑADIR NUEVO TOKEN A CABECERAS Y PROSEGUIR CON LA PETICIÓN HTTP ORIGINAL");
            return next.handle(this.addTokenToHeaders(req, token));
          }),
          catchError(err => {
            this.refreshing = false;
            return throwError(() => err);
          })
        )
      }
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token:any) => next.handle(this.addTokenToHeaders(req, token)))
    );
  }  

  private addTokenToHeaders(req:HttpRequest<any>, token:IAuthToken) {
    console.log("AÑADIENDO TOKEN A CABECERA ");
    return req.clone({
      headers: req.headers.set("Authorization", "Bearer "+token.token)
    });
  }
}
