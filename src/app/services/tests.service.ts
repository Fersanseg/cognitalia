import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITest } from '../ITest';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private apiUrl = "http://localhost:5000/tests";

  constructor(
    private http: HttpClient
  ) { }

  getTests(): Observable<ITest[]> {
    return this.http.get<ITest[]>(this.apiUrl);
  }
}
