import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { getTestDescriptionFromStorage  } from 'src/app/utils/functions/getDescription';

@Component({
  selector: 'app-tiempo-reaccion',
  templateUrl: './tiempo-reaccion.component.html',
  styleUrls: ['./tiempo-reaccion.component.scss'],
  encapsulation: ViewEncapsulation.None // Need to disable Angular's Cross-site Scripting to style our testData resource
})
export class TiempoReaccionComponent implements OnInit {
  // @Output() testDescription: string;
  // testDescription!: string;

  constructor() {}
  
  ngOnInit(): void {
    // this.getDescription();
  }
  
  // Gets the test description from the browser's sessionStorage
  // private getDescription(): void {
  //   this.testDescription = getTestDescriptionFromStorage();
  // }
}
