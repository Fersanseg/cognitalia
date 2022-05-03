import { Component, OnInit } from '@angular/core';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/services/common/data-storage.service';
import { EventsService } from 'src/app/services/common/events.service';
import { TestsService } from 'src/app/services/common/tests.service';
import { MnumService } from 'src/app/services/memoria-numerica/mnum.service';
import { IGlobalResults } from 'src/app/utils/interfaces/iglobal-results';

@Component({
  selector: 'app-memoria-numerica',
  templateUrl: './memoria-numerica.component.html',
  styleUrls: ['./memoria-numerica.component.scss']
})
export class MemoriaNumericaComponent implements OnInit {
  public testFinished!:Observable<boolean>;
  public showResults:boolean = false;
  public results!:string;
  public resetTest!:() => void; // Calls mnumService.resetTest(). Gets passed to an input in test-results.component.ts, which calls the function when the results component listens to its button's click event

  private testResult!:IGlobalResults;

  constructor(
    private mnumService:MnumService,
    private testsService:TestsService,
    private eventsService:EventsService) { }

  ngOnInit(): void {
    this.testFinished = this.mnumService.getTestFinished();
    this.testsService.getSingleTestGlobalResults(2).subscribe(r => this.testResult = r);
    
    this.testFinished.subscribe(s => {
      if(s) { // Bool: if test signals that it's finished, generate the results charts
        const correctAmt = this.mnumService.getResults();
        this.results = "El número más largo que has podido recordar es de "+correctAmt+" cifras"; // Num memory results chart
        this.testResult = {...this.testResult, score: correctAmt+" cifras"}; // Global results chart
        this.testsService.updateResult(this.testResult).subscribe(r => this.eventsService.ResultsSaved.emit());
      }
    });

    this.resetTest = ():void => {
      this.results = "";
      this.mnumService.resetTest();
    }
  }
}
