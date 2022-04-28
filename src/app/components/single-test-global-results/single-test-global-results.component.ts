import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Component({
  selector: 'app-single-test-global-results',
  templateUrl: './single-test-global-results.component.html',
  styleUrls: ['./single-test-global-results.component.scss']
})
export class SingleTestGlobalResultsComponent implements OnInit, OnChanges {
  @Input() testName!:string;
  @Input() testScore?:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['testScore'].currentValue);
  }

}
