import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { IGlobalResults } from '../../utils/interfaces/iglobal-results';
import { ITest } from '../../utils/interfaces/ITest';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private testsEndpoint = "http://localhost:5000/tests";
  private resultsEndpoint = "http://localhost:5000/results";
  private cacheTests!:Observable<ITest[]>;
  private cacheGlobalTestResults!:Observable<IGlobalResults[]>;
  private cacheSingleTestResults!:Observable<IGlobalResults>;

  constructor(
    private http: HttpClient
  ) { }

  // Methods for handling tests
  /**
   * Fetches the tests API and gets the info for every test
   * @returns An observable that serves an array of ITest objects
   */
  public getTests(): Observable<ITest[]> {
    if(!this.cacheTests) {
      this.cacheTests = this.http.get<ITest[]>(this.testsEndpoint).pipe(
        map((res:ITest[]) => res),
        shareReplay(1)
      );
    }
    return this.cacheTests;
  }

  // Methods for handling test result scores
  /**
   * Fetches the results API and gets every test's results
   * @returns An observable that serves an array of IGlobalResults objects
   */
  public getAllGlobalResults(): Observable<IGlobalResults[]> {
    return this.http.get<IGlobalResults[]>(this.resultsEndpoint).pipe(
      map((res:IGlobalResults[]) => res)
    );
  }
  /**
   * Fetches the results API and filters for the results of the specified test
   * @param testId The DB id of the test to be fetched
   * @returns An observable that serves an object of type IGlobalResults
   */
  public getSingleTestGlobalResults(testId:number): Observable<IGlobalResults> {
    return this.http.get<IGlobalResults[]>(this.resultsEndpoint).pipe(
      map((res:IGlobalResults[]) => res.filter(r => r.id == testId)[0]),
      shareReplay(1)
    );
  }

  /**
   * Updates the backend with a new result for the specified test
   * @param test An object of type IGlobalResults that holds the info which will update the backend
   * @returns An observable that serves an object of type IGlobalResults
   */
  public updateResult(test:IGlobalResults):Observable<IGlobalResults> {
    const url = `${this.resultsEndpoint}/${test.id}`
    return this.http.put<IGlobalResults>(url, test, httpOptions);
  }

  private flushCache(cache:any) {
    cache = null;
  }
}