import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/services/common/events.service';
import { TestsService } from 'src/app/services/common/tests.service';
import { UserAuthService } from 'src/app/services/common/user-auth.service';
import { TrService } from 'src/app/services/tiempo-reaccion/tr.service';
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
  private initialResults:IResults = {
    responseTimes: "Your results are: ",
    averageTimes: "Your average result is: ",
    comparativeResults: ""
  }
  
  public testCount!:number;
  public results!:IResults;
  public resetTest!:() => void; // Calls trService.resetTest(). Gets passed to an input in test-results.component.ts, which calls the function when the results component listens to its button's click event
  

  constructor(
    private trService:TrService,
    private testsService:TestsService,
    private eventsService:EventsService
  ) { }
  
  ngOnInit(): void {
    this.testsService.getSingleTestGlobalResults(1).subscribe(r => this.testResult = r);
    this.testCountSubscription = this.trService.getCurrentTestCount().subscribe(s => this.testCount = s);
    this.initializeResultsObject();

    this.resetTest = ():void => {
      this.initializeResultsObject();
      this.trService.resetTest();
    }
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
    this.testsService.updateResult(this.testResult).subscribe(r => this.eventsService.ResultsSaved.emit());
  }
  
  private initializeResultsObject():void {
    this.results = {...this.initialResults};
  }
  
  ngOnDestroy(): void {
    this.testCountSubscription.unsubscribe();
  }
}
