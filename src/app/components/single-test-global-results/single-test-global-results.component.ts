import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-test-global-results',
  templateUrl: './single-test-global-results.component.html',
  styleUrls: ['./single-test-global-results.component.scss']
})
export class SingleTestGlobalResultsComponent implements OnInit {
  @Input() testName!:string;
  @Input() testScore?:string;

  constructor() { }

  ngOnInit(): void {
  }
}
