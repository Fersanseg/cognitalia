import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getTestDescriptionFromStorage } from 'src/app/utils/functions/getDescription';

@Component({
  selector: 'app-test-description-box',
  templateUrl: './test-description-box.component.html',
  styleUrls: ['./test-description-box.component.scss'],
  encapsulation: ViewEncapsulation.None // Need to disable Angular's Cross-site Scripting to style our testData resource
})
export class TestDescriptionBoxComponent implements OnInit {
  testDescription!: string;

  constructor() { }

  ngOnInit(): void {
    this.getDescription();
  }

  // Gets the test description from the browser's sessionStorage
  private getDescription(): void {
    this.testDescription = getTestDescriptionFromStorage() || "Descripción del test no encontrada";
  }
}
