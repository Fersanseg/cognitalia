import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {
  @Input() responseTimes!:string|null;
  @Input() averageTimes?:string;
  @Input() comparativeResults!:string;

  constructor() { }

  ngOnInit(): void {
  }
}
