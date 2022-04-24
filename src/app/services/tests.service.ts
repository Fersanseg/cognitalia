import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { ITest } from '../utils/interfaces/ITest';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private apiUrl = "http://localhost:5000/tests";
  public cacheData!:Observable<ITest[]>;

  constructor(
    private http: HttpClient
  ) { }

  getTests(): Observable<ITest[]> {
      if(!this.cacheData) {
        this.cacheData = this.http.get<ITest[]>(this.apiUrl).pipe(
          map((res:ITest[]) => res),
          shareReplay(1)
        );
      }
      return this.cacheData;
  }
}
