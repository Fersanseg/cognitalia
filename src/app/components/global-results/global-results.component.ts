import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
import { TestsService } from 'src/app/services/tests.service';
import { IGlobalResults } from 'src/app/utils/interfaces/iglobal-results';

@Component({
  selector: 'app-global-results',
  templateUrl: './global-results.component.html',
  styleUrls: ['./global-results.component.scss']
})
export class GlobalResultsComponent implements OnInit, OnDestroy {
  private allGlobalResultsSubscription!:Subscription;
  private resultsChangedEvent!:Subscription;

  public results$!:Observable<IGlobalResults[]>;
  // public globalTestResults!:IGlobalResults[];

  constructor(private testsService:TestsService, private eventsService:EventsService) { }

  ngOnInit(): void {
    this.loadGlobalResults();
    this.eventsService.ResultsSaved.subscribe(() => this.loadGlobalResults())
  }


  
  private loadGlobalResults(): void {
    this.results$ = this.testsService.getAllGlobalResults();
  }

  ngOnDestroy(): void {
    
  }
}