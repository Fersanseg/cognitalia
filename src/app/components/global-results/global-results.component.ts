import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/common/events.service';
import { TestsService } from 'src/app/services/common/tests.service';
import { IGlobalResults } from 'src/app/utils/interfaces/iglobal-results';

@Component({
  selector: 'app-global-results',
  templateUrl: './global-results.component.html',
  styleUrls: ['./global-results.component.scss']
})
export class GlobalResultsComponent implements OnInit {
  public results$!:Observable<IGlobalResults[]>;

  constructor(private testsService:TestsService, private eventsService:EventsService) { }

  ngOnInit(): void {
    this.loadGlobalResults();
    this.eventsService.ResultsSaved.subscribe(() => this.loadGlobalResults())
  }

  private loadGlobalResults(): void {
    this.results$ = this.testsService.getAllGlobalResults();
  }
}