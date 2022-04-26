import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestsService } from 'src/app/services/tests.service';
import { TrService } from 'src/app/services/tr.service';
import { IGlobalResults } from 'src/app/utils/interfaces/iglobal-results';
import { IResults } from 'src/app/utils/interfaces/iresults';

@Component({
  selector: 'app-tiempo-reaccion',
  templateUrl: './tiempo-reaccion.component.html',
  styleUrls: ['./tiempo-reaccion.component.scss'],
})
export class TiempoReaccionComponent implements OnInit, OnDestroy {
  private testCountSubscription!:Subscription;
  private testResult!:IGlobalResults;
  
  public testCount!:number;
  public results!:IResults;
  public resetTest!:() => void; // Calls trService.resetTest(). Gets passed to an input in test-results.component.ts, which calls the function when the results component listens to its button's click event
  
  
  initialResults:IResults = {
    responseTimes: "Tus resultados son: ",
    averageTimes: "La media de tus resultados es: ",
    comparativeResults: ""
  }

  constructor(
    private trService:TrService,
    private testsService:TestsService
  ) {
  }
  
  ngOnInit(): void {
    this.testsService.getSingleTestGlobalResults(1).subscribe(r => this.testResult = r);
    this.testCountSubscription = this.trService.getCurrentTestCount().subscribe(s => this.testCount = s);
    this.initializeResultsObject();

    this.resetTest = ():void => {
      this.initializeResultsObject();
      this.trService.resetTest();
    }
  }

  ngOnDestroy(): void {
    this.testCountSubscription.unsubscribe();
  }

  /**
   * Generates the results sheet for the current test, as well as saving the result to the current session in the backend
   * @param e The event args, which contain the test results
   */
  public generateResults(e: any):void {
    this.results.responseTimes += e.responseTimes;
    this.results.averageTimes += e.averageTimes+" ms";
    this.results.comparativeResults = e.comparativeResults;

    this.testResult = {...this.testResult, score: e.averageTimes+"ms"};
    this.testsService.updateResult(this.testResult).subscribe(t => console.log("UPDATED", this.testResult, t));
  }

  private initializeResultsObject():void {
    this.results = {...this.initialResults};
  }
  
}
