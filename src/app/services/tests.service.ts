import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { IGlobalResults } from '../utils/interfaces/iglobal-results';
import { ITest } from '../utils/interfaces/ITest';

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
    if(!this.cacheGlobalTestResults) {
      this.cacheGlobalTestResults = this.http.get<IGlobalResults[]>(this.resultsEndpoint).pipe(
        map((res:IGlobalResults[]) => res),
        shareReplay(1)
      );
    }
    return this.cacheGlobalTestResults;
  }
  /**
   * Fetches the results API and filters for the results of the specified test
   * @param testId The DB id of the test to be fetched
   * @returns An observable that serves an object of type IGlobalResults
   */
  public getSingleTestGlobalResults(testId:number): Observable<IGlobalResults> {
    if(!this.cacheSingleTestResults) {
      this.cacheSingleTestResults = this.http.get<IGlobalResults[]>(this.resultsEndpoint).pipe(
        map((res:IGlobalResults[]) => res.filter(r => r.id == testId)[0]),
        shareReplay(1)
      );
    }
    return this.cacheSingleTestResults;
  }
}