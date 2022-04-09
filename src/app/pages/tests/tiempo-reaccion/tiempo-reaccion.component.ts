import { Component, Input, OnInit } from '@angular/core';
import { getTestDescriptionFromStorage } from 'src/app/utils/functions/getDescription';

@Component({
  selector: 'app-tiempo-reaccion',
  templateUrl: './tiempo-reaccion.component.html',
  styleUrls: ['./tiempo-reaccion.component.scss']
})
export class TiempoReaccionComponent implements OnInit {
  testDescription!: string|null; 

  constructor() {}
  
  ngOnInit(): void {
    this.getDescription();
  }
  
  // Gets the test description from the browser's sessionStorage
  private getDescription(): void {
    this.testDescription = getTestDescriptionFromStorage();
  }
}
