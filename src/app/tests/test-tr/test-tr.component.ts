import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrService } from 'src/app/services/tr.service';

@Component({
  selector: 'app-test-tr',
  templateUrl: './test-tr.component.html',
  styleUrls: ['./test-tr.component.scss']
})
export class TestTRComponent implements OnInit, OnDestroy {
  @Output() generateResults = new EventEmitter();
  textSubscription!:Subscription;
  stateSubscription!:Subscription;
  testCountSubscription!:Subscription;

  title!:string;
  subtitle!:string;
  state!:string;
  testCount!:number;

  constructor(private trService:TrService) {
  }

  ngOnInit(): void {
    this.textSubscription = this.trService.getHeading().subscribe(s => {
      this.title = s.title;
      this.subtitle = s.subtitle;
    });

    this.stateSubscription = this.trService.getCurrentState().subscribe(s => this.state = s); 
    this.testCountSubscription = this.trService.getCurrentTestCount().subscribe(s => this.testCount = s);
  }

  handleStateChange(): void {
    this.trService.handleStateChange();
    if(this.testCount>=5) {
      let averageResult = this.trService.getResponseAverage();

      this.generateResults.emit({
        responseTimes: this.trService.getResponseTimes(),
        averageTimes: averageResult,
        comparativeResults: this.trService.evaluateResults(averageResult)
      });
    }
  }

  ngOnDestroy(): void {
    this.textSubscription.unsubscribe();
    this.stateSubscription.unsubscribe();
  }
}
