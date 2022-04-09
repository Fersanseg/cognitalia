import { Component, OnInit } from '@angular/core';
import { getTestDescriptionFromStorage } from 'src/app/utils/functions/getDescription';

@Component({
  selector: 'app-memoria-numerica',
  templateUrl: './memoria-numerica.component.html',
  styleUrls: ['./memoria-numerica.component.scss']
})
export class MemoriaNumericaComponent implements OnInit {
  testDescription!: string|null; 

  constructor() { }

  ngOnInit(): void {
    this.getDescription();
  }
  
  // Gets the test description from the browser's sessionStorage
  private getDescription(): void {
    this.testDescription = getTestDescriptionFromStorage();
  }
}
